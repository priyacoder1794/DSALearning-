// The graph is a non-linear data structure. Graph G contains a set of vertices V and a set of Edges E. Graph has lots of applications in computer science. 

//Graph is Divided into Two Broad Categories
// Directed Graph (Di- graph) – Where edges have direction.
// Undirected Graph – Where edges do not represent any directed
// There are various ways to represent a Graph:-

// Adjacency Matrix
// Adjacency List


// -------------------basic operations on the graph -------------------

//addVertex(v) – It adds the vertex v as key to adjList and initializes its values with an array. 
// add vertex to the graph
addVertex(v)
{
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
}


//addEdge(src, dest) – It adds an edge between the src and dest. 

// add edge to the graph
addEdge(v, w)
{
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
}

//printGraph() – It prints vertices and their adjacency list. 
// Prints the vertex and adjacency list
printGraph()
{
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) 
{
        // get the corresponding adjacency list
        // for the vertex
        var get_values = this.AdjList.get(i);
        var conc = "";

        // iterate over the adjacency list
        // concatenate the values into a string
        for (var j of get_values)
            conc += j + " ";

        // print the vertex and its adjacency list
        console.log(i + " -> " + conc);
    }
}
