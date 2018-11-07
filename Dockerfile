FROM node:8

COPY . .

RUN cd LiLas && cd Express && npm install

EXPOSE 8181