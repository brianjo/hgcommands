``` 
hg serve \[OPTION\]...

start stand-alone webserver

    Start a local HTTP repository browser and pull server. You can use this
    for ad-hoc sharing and browsing of repositories. It is recommended to use
    a real web server to serve a repository for longer periods of time.

    Please note that the server does not implement access control. This means
    that, by default, anybody can read from the server and nobody can write to
    it by default. Set the "web.allow-push" option to "*" to allow everybody
    to push to the server. You should use a real web server if you need to
    authenticate users.

    By default, the server logs accesses to stdout and errors to stderr. Use
    the -A/--accesslog and -E/--errorlog options to log to files.

    To have the server choose a free port number to listen on, specify a port
    number of 0; in this case, the server will print the port number it uses.

    Returns 0 on success.

Options (\[+\] can be repeated):

-A --accesslog FILE name of access log file to write to -d --daemon run
server in background --daemon-postexec VALUE \[+\] used internally by
daemon mode -E --errorlog FILE name of error log file to write to -p
--port PORT port to listen on (default: 8000) -a --address ADDR address
to listen on (default: all interfaces) --prefix PREFIX prefix path to
serve from (default: server root) -n --name NAME name to show in web
pages (default: working directory) --web-conf FILE name of the hgweb
config file (see 'hg help hgweb') --pid-file FILE name of file to write
process ID to --port-file FILE name of file to write port to (useful
with '-p 0') -t --templates TEMPLATE web templates to use --style STYLE
template style to use -6 --ipv6 use IPv6 in addition to IPv4
--certificate FILE SSL certificate file --read-only only allow read
operations

(some details hidden, use --verbose to show complete help)
