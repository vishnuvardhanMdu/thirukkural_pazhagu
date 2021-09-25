from flask import Flask 
from user.audioProcessing import AudioProceesing
from user.kural import kural
from app import app
from user.models import User

@app.route('/user/signup', methods=['POST'])
def signup():
    return User().signup()

@app.route('/user/signout')
def signout():
    return User().signout()

@app.route('/user/login', methods=['POST'])
def login():
    return User().login()

@app.route('/practice_thirukkural',  methods=["POST"])
def practice():
    return AudioProceesing().practice()


@app.route('/filter_adhigaram',  methods=["POST"])
def fetchKural():
    return kural().fetchKural()
