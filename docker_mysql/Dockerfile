# What image do you want to start building on?
FROM mysql:latest

# What source code do you what to copy, and where to put it?
COPY ./dump.sql /docker-entrypoint-initdb.d

# What port will the container talk to the outside world with once created?
EXPOSE 3306

# Environment Variables
ENV MYSQL_ROOT_PASSWORD=student
ENV MYSQL_DATABASE=airbnb_clone
ENV MYSQL_USER=student
ENV MYSQL_PASSWORD=student

CMD ["--default-authentication-plugin=mysql_native_password"]
