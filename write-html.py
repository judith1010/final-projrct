import webbrowser

f = open('helloworld.html','w')

message = """<html>
<head></head>
<body>
<p>Judith is awesome</p>
<div></div>
</body>
</html>"""

f.write(message)
f.close()

filename = 'file:///C:/Users/GWCUser/Desktop/final-projrct/' + 'helloworld.html'
webbrowser.open_new_tab(filename)
