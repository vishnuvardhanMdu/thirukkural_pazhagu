from flask import Flask, render_template,redirect, session
from functools import wraps
import pymongo

app = Flask(__name__)
app.secret_key=b'\xf3\xc0\xcd\x1c\x147\x96C\xecf\xdf\x02H\x1c\xa6\xa6'

#Database
CONNECTION_STRING = "mongodb+srv://vishnu_vardhan:vishnu_vardhan@cluster0.zozdv.mongodb.net/thirukkural_pazhagu?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.thirukkural_pazhagu

#Decorators
def login_required(f):
    @wraps(f)
    def wrap(*arg, **kwargs):
        if'logged_in' in session:
            return f(*arg, **kwargs)
        else:
            return redirect('/')
    return wrap

#Routes
from user import routes

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/register/')
def register():
    return render_template('register.html')


@app.route('/index/')
#@login_required
def index():
    return render_template('index.html')


@app.route('/learn_thirukkural')
def learn_thirukkural():
    return render_template('learn_thirukkural.html')


@app.route('/select_adhigaram')
def select_adhigaram():
    return render_template('select_adhigaram.html')
