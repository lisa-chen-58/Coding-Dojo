from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models import dojo, ninja 

@app.route('/ninjas')
def ninjas():
    dojos = dojo.Dojo.get_all()
    return render_template("ninjas.html", dojos = dojos)

@app.route('/ninjas/create', methods=['POST'])
def create_ninja():
    if not ninja.Ninja.validate_ninja(request.form):
        return redirect('/ninjas')
    ninja.Ninja.save(request.form)
    return redirect('/ninja_result.html')

@app.route('/ninjas/<int:id>')
def view_ninja(id):
    data ={
        "id":id
    }
    return render_template("ninja_result.html", ninja=ninja.Ninja.get_one_ninja(data))