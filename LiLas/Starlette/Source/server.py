from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.responses import HTMLResponse
import uvicorn

app = Starlette(template_directory='templates')


@app.route('/')
async def homepage(request):
    return JSONResponse({'Main': 'Page'})


@app.route('/group/add')
async def group_add(request):
    return JSONResponse({'hello': 'world'})


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)
