from flask import Flask, request, jsonify
import mysql.connector
import hashlib

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="6644",
    port='6644',
    database='Lila',
    auth_plugin='mysql_native_password'
)

app = Flask(__name__)

def format3(string,arg1,arg2,arg3):
    return string%(arg1,arg2,arg3)

@app.route('/login/new')
def hello_world():
    name = request.args.get('name')
    password = request.args.get('pass')
    id = request.args.get('id')

    mycursor = mydb.cursor()
    mycursor.execute(format3("insert into User(name, id, password) values('%s', '%s', '%s')",name, id, password))

    return jsonify({'state': True, 'secretKey': hashlib.sha1(b'wonho').hexdigest()})


@app.route('/group/add')
def hello_world():
    GSC = request.args.get('GSC')
    id = request.args.get('id')
    password = request.args.get('pass')
    json_data = request.args.get('json')

    mycursor = mydb.cursor()
    mycursor.execute(format3("insert into GroupTable(user_json, id, password, GSC) values('%s', '%s', '%s')",name, id, password))

    return jsonify({'state': True, 'secretKey': hashlib.sha1(b'wonho').hexdigest()})


if __name__ == '__main__':
    app.run()
