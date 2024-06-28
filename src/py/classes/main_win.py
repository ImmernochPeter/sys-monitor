"""
Main Windwow
"""

from eel import init, start


class MainWindow:
    """
    Main Windwow for the APP
    """

    def __init__(self, path: str) -> None:
        init(path)

    def built_window(self, template: str, len: int, width: int) -> None:
        """builds the winwow"""

        start(template, size=(width, len))
