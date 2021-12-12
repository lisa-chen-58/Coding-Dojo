from flask import Flask
app = Flask(__name__) # Create a new instance of the Flask class called "app"

@app.route('/')
def index():
    return 'Hello world!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<string:word>')
def say_flask(word):
    return 'Hi '+word+'!'

@app.route('/repeat/<int:num>/<string:word>')
def repeating(num,word):
    repeat_words=''
    for i in range(0,num):
        repeat_words += f"<p>{word}</p>"
    return repeat_words

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.