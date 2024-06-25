from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/zadanie1')
def zadanie1():
    return render_template('zadanie1.html')

@app.route('/zadanie2')
def zadanie2():
    return render_template('zadanie2.html')

@app.route('/zadanie3')
def zadanie3():
    return render_template('zadanie3.html')

if __name__ == '__main__':
    app.run(debug=True)
