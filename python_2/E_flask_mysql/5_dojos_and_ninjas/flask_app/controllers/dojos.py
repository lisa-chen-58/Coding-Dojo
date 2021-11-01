from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.dojo import Dojo 

@app.route('/')
def index():
    return redirect ('/dojos')

@app.route('/dojos')
def dojos():
    dojos = Dojo.get_all()
    print(dojos)
    return render_template("home.html", all_dojos = dojos)

@app.route('/dojos/create',methods=['POST'])
def create_dojo():
    Dojo.save(request.form)
    return redirect('/dojos')

@app.route('/dojos/<int:id>')
def view(id):
    data ={
        "id":id
    }
    return render_template("dojos.html", dojo=Dojo.get_one_ninjas(data))