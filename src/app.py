"""
Main APP
"""

from py.classes.main_win import MainWindow


def main() -> None:
    """
    main
    """
    windwow = MainWindow("templates")
    windwow.built_window("index.html", 800, 1200)


if __name__ == "__main__":
    main()
