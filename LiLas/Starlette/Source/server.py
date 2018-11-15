from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.responses import HTMLResponse
import mysql.connector
import uvicorn

app = Starlette(template_directory='templates')

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="6644",
    port='6644',
    database='Lila',
    auth_plugin='mysql_native_password'
)


@app.route('/')
async def homepage(request):
    return JSONResponse({'Main': 'Page'})


@app.route('/group/add')
async def group_add(request):
    mycursor = db.cursor()

    print(request['params'])
    return JSONResponse({'hello': 'world'})


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)
