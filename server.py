from flask import Flask, render_template, request, jsonify
import requests
from os import environ

app = Flask(__name__)


@app.route('/api/apikey')
def return_api():
    """RETURN API KEY"""
    print(environ['OPEN_WEATHER_KEY'])
    return jsonify(environ['OPEN_WEATHER_KEY'])


@app.route('/')
def show_homepage():
    """Show the application's homepage."""

    return render_template('base.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
