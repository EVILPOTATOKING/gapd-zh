#!/usr/bin/env python3
"""在局域网内提供这个网站。

只对外提供本文件夹里的网站文件,以及期刊 PDF(映射为 /journal.pdf),
不会暴露桌面上的其他文件。

用法:
    python3 serve.py              # 默认端口 8000
    python3 serve.py 8080         # 指定端口
PDF 路径默认是本文件夹旁边的「非常好期刊 使我设计赞赞.pdf」,
也可以用环境变量 GAPD_PDF 指定。
"""
import functools
import http.server
import os
import socket
import sys

SITE_DIR = os.path.dirname(os.path.abspath(__file__))
PDF_PATH = os.environ.get(
    "GAPD_PDF",
    os.path.join(os.path.dirname(SITE_DIR), "非常好期刊 使我设计赞赞.pdf"),
)
PDF_URL = "/journal.pdf"


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if path.split("?", 1)[0].split("#", 1)[0] == PDF_URL:
            return PDF_PATH
        return super().translate_path(path)

    def list_directory(self, path):
        self.send_error(404)
        return None


def lan_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("10.255.255.255", 1))
        return s.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        s.close()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    handler = functools.partial(Handler, directory=SITE_DIR)
    server = http.server.ThreadingHTTPServer(("0.0.0.0", port), handler)
    if not os.path.exists(PDF_PATH):
        print(f"提示:没找到 PDF({PDF_PATH}),「在 PDF 中打开」按钮将不可用。")
    print(f"本机访问:   http://localhost:{port}/")
    print(f"局域网访问: http://{lan_ip()}:{port}/")
    print("按 Ctrl+C 停止。", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
