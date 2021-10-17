from flask import Flask, render_template, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html",num1=8,num2=8)

@app.route('/<int:x>')
def modify_row(x):
    return render_template("index.html",num1=x,num2=8)

@app.route('/<int:x>/<int:y>')
def modify_parameters(x,y):
    return render_template("index.html",num1=x,num2=y)

if __name__=="__main__":
    app.run(debug=True)