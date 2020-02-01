"""Web server flask app."""
from flask import Flask
app = Flask(__name__)


@app.route("/ping", methods=["GET"])
def ping():
    """Ping the server."""
    return "ping"


if __name__ == "__main__":
    app.run()
