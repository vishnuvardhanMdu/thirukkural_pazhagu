from flask import Flask, render_template, request, redirect
from app import db

class kural:
    def fetchKural(self):
            
        if request.method == "POST":
            print("FILTER DATA RECEIVED")

            select_pal = request.form.get('select_pal')
            select_iyall = request.form.get('select_iyal')
            select_adhigaram = request.form.get('select_adhigaram')

            # kuralList = db.thirukural_data.find_one({})
            # print(kuralList)
            return render_template('select_adhigaram.html')
