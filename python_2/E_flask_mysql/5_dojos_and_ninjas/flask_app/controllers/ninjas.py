from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models import dojo, ninja 

@app.route('/ninjas')
def ninjas():
    dojos = dojo.Dojo.get_all()
    print(ninjas)
    return render_template("ninjas.html", dojos = dojos)

@app.route('/ninjas/create', methods=['POST'])
def create_ninja():
    ninja.Ninja.save(request.form)
    return redirect('/')