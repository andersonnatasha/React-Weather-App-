from flask import Flask, render_template, request
import requests
from os import environ

app = Flask(__name__)

# Todo remove Weather Key not used
# OPEN_WEATHER_KEY = environ['OPEN_WEATHER_KEY']
# WEATHERBIT_KEY = environ['WEATHERBIT_KEY']


@app.route('/')
def show_homepage():
    """Show the application's homepage."""

    return render_template('base.html')


# @app.route('/get-weather-details', methods=['POST'])
# def get_current_weather_details_json():
#     """Return a JSON response of current weather details for zip-code."""

#     # zip_code = request.args.get('zip-code')
#     data = request.get_json()
#     zip_code = data['zipcode']

#     #Below is WeatherBit
#     # url = 'https://api.weatherbit.io/v2.0/current'
#     # payload = {'key': WEATHERBIT_KEY, 'units': 'I', 'postal_code': zip_code}

#     # Below is for Openweather API
#     url = "http://api.openweathermap.org/data/2.5/weather"
#     payload = {'zip': zip_code, 'units': 'imperial', "APPID": OPEN_WEATHER_KEY}

#     res = requests.get(url, params=payload)
#     data = res.json()
#     print('???????????????????????>>>>>>>>>>>>>>>>>>>>>>>>>???????????????/')
#     print(data['name'])
#     return data

# React makes request to server
# server makes API request --> gets response.
# server returns the response as JSON to my component
# component parses and then it displays and does want i want
# nothing really for props


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
