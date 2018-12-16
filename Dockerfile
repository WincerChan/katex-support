FROM node
RUN mkdir -p /home/Katex-ts
WORKDIR /home/Katex-ts
COPY . /home/Katex-ts
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]

