"""Web server flask app."""
from flask import Flask, Response
app = Flask(__name__)


@app.route("/ping", methods=["GET"])
def ping():
    """Ping the server."""
    return Response("pong", status=200)


if __name__ == "__main__":
    app.run()
