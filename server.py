from flask import Flask, render_template

app = Flask(__name__)

app.route("/")


def show_homepage():
    """Show the homepage."""

    return render_template("homepage.html")
