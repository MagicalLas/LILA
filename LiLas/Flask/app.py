from flask import Flask, request, jsonify
import mysql.connector
import hashlib
import json

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="6644",
    port='6644',
    database='Lila',
    auth_plugin='mysql_native_password'
)

app = Flask(__name__)


def wrappin(data):
    return '"' + data + '"'


@app.route('/login/new')
def hello_world():
    data = request.data
    mycursor = mydb.cursor()
    mycursor.execute("insert into User(name, id, password) values('wonho', 'haho', '6644')")
    return jsonify({'state': True, 'secretKey': hashlib.sha1(b'wonho').hexdigest()})


if __name__ == '__main__':
    app.run()
