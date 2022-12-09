import sys

import random
from PyQt6.QtCore import Qt
from PyQt6.QtGui import QAction, QPalette, QColor
from PyQt6.QtWidgets import QApplication, QLabel, QMainWindow, QMenu, QComboBox, QCheckBox, QListWidget, QLineEdit, QSpinBox, QWidget, QVBoxLayout, QPushButton


class Color(QWidget):
    def __init__(self, c1, c2=None, c3=None):
        super(Color, self).__init__()
        self.setAutoFillBackground(True)

        palette = self.palette()
        if c2 is None or c3 is None:
            palette.setColor(QPalette.ColorRole.Window, QColor(c1))
        else:
            palette.setColor(QPalette.ColorRole.Window, QColor(c1, c2, c3))
        self.setPalette(palette)


def random_color():
    return Color(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))


class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()

        self.setWindowTitle('My App')

        layout = QVBoxLayout()

        layout.addWidget(Color(200, 25, 93))
        layout.addWidget(Color('pink'))
        layout.addWidget(Color('blue'))

        button = QPushButton('Click to change colors')
        button.clicked.connect(self.change_colors)
        layout.addWidget(button)

        widget = QWidget()
        widget.setLayout(layout)
        self.setCentralWidget(widget)

    def change_colors(self):
        layout = QVBoxLayout()

        layout.addWidget(random_color())
        layout.addWidget(Color(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
        layout.addWidget(Color(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))

        button = QPushButton('Click to change colors')
        button.clicked.connect(self.change_colors)
        layout.addWidget(button)

        widget = QWidget()
        widget.setLayout(layout)
        self.setCentralWidget(widget)



app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
