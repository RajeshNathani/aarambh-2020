from flask import Flask , render_template , request
import csv
import json
app = Flask(__name__ , static_folder= "res")


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api/men/tshirts/300' , methods = ["GET" , "POST"])
def tee1():
    
        with open('men_tshirts_1.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[2],
                    "seller" : row[4],
                    "links" : row[5]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/men/tshirts/500' , methods = ["GET" , "POST"])
def tee2():
    
        with open('men_tshirts_2.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[2],
                    "seller" : row[4],
                    "links" : row[5]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300


@app.route('/api/men/tshirts/max' , methods = ["GET" , "POST"])
def tee3():
    
        with open('men_tshirts_3.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[2],
                    "seller" : row[4],
                    "links" : row[5]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/men/shirts/max' , methods = ["GET" , "POST"])
def tee4():
    
        with open('men_shirts_3.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[2],
                    "seller" : row[4],
                    "links" : row[5]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/men/shirts/500' , methods = ["GET" , "POST"])
def tee5():
    
        with open('men_shirts_2.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[2],
                    "seller" : row[4],
                    "links" : row[5]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/men/shoes/900' , methods = ["GET" , "POST"])
def shoe1():
    
        with open('men_shoes_2.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[2],
                    "seller" : row[4],
                    "links" : row[5]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/men/shoes/max' , methods = ["GET" , "POST"])
def shoe2():
    
        with open('men_shoes_3.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[4],
                    "seller" : row[2],
                    "links" : row[3]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/men/trouser/500' , methods = ["GET" , "POST"])
def trou1():
    
        with open('men_trousers_2.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[2],
                    "seller" : row[4],
                    "links" : row[5]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/men/trouser/max' , methods = ["GET" , "POST"])
def trou2():
    
        with open('men_trousers_3.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[0],
                    "name" : row[1],
                    "price" : row[2],
                    "seller" : row[4],
                    "links" : row[5]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/women/kurtis' , methods = ["GET" , "POST"])
def kurti():
    
        with open('kurtis_women.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[1],
                    "name" : row[3],
                    "price" : row[4],
                    "seller" : row[6],
                    "links" : row[7]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/women/jeans' , methods = ["GET" , "POST"])
def jeans():
    
        with open('jeans_women.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[1],
                    "name" : row[3],
                    "price" : row[5],
                    "seller" : row[7],
                    "links" : row[8]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/women/footwear' , methods = ["GET" , "POST"])
def footwear():
    
        with open('footwear_women.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[1],
                    "name" : row[3],
                    "price" : row[4],
                    "seller" : row[6],
                    "links" : row[7]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300

@app.route('/api/women/tops' , methods = ["GET" , "POST"])
def tops():
    
        with open('tops.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=',')
            first_line = True
            items = []
            for row in data:
                if not first_line:
                    items.append({
                    "image" : row[1],
                    "name" : row[3],
                    "price" : row[4],
                    "seller" : row[6],
                    "links" : row[7]
                    })
                else:
                    first_line = False
        men_ts_300 = json.dumps(items)
        return men_ts_300


if __name__ == "__main__":
    app.run(debug=True)