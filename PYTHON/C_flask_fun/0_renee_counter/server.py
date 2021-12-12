from flask import Flask, render_template, session, redirect

app = Flask(__name__)
app.secret_key="Jimmy Johns Tacos"

@app.route('/')
def index():
    if "count" not in session:
        session["count"] = 0
    else:
        session["count"] += 1 
    return render_template("index.html")

@app.route('/increment')
def increment():
    return redirect('/')

@app.route('/add_lisa')
def add_lisa():
    session["count"] += 1  
    return redirect('/')

@app.route('/shiva')
def shiva():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)