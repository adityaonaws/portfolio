FROM node:16

COPY . .

CMD ["yarn", "run", "dev"]

