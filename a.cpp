#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h> 
#include <complex>
#include <queue>
#include <set>
#include <unordered_set>
#include <list>
#include <chrono>
#include <random>
#include <iostream>
#include <algorithm>
#include <cmath>
#include <string>
#include <vector>
#include <map>
#include <unordered_map>
#include <stack>
#include <iomanip>
#include <fstream>
 
using namespace std;
 
typedef long long ll;
typedef long double ld;
typedef pair<int,int> p32;
typedef pair<ll,ll> p64;
typedef pair<double,double> pdd;
typedef vector<ll> v64;
typedef vector<int> v32;
typedef vector<vector<int> > vv32;
typedef vector<vector<ll> > vv64;
typedef vector<vector<p64> > vvp64;
typedef vector<p64> vp64;
typedef vector<p32> vp32;
ll MOD = 998244353;
double eps = 1e-12;
#define forn(i,e) for(ll i = 0; i < e; i++)
#define forsn(i,s,e) for(ll i = s; i < e; i++)
#define rforn(i,s) for(ll i = s; i >= 0; i--)
#define rforsn(i,s,e) for(ll i = s; i >= e; i--)
#define ln "\n"
#define dbg(x) cout<<#x<<" = "<<x<<ln
#define mp make_pair
#define pb push_back
#define fi first
#define se second
#define INF 2e18
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
#define all(x) (x).begin(), (x).end()
#define sz(x) ((ll)(x).size())



class Graph{
	int V;
	list<int> *adj;
	v32 bridgeUtil(int v, bool visited[], int disc[], int low[],int parent[], v32 vect);
public:
	Graph(int V); 
	void addEdge(int v, int w); 
	v32 bridge(); 
};

Graph::Graph(int V){
	this->V = V;
	adj = new list<int>[V];
}

void Graph::addEdge(int v, int w){
	adj[v].push_back(w);
	adj[w].push_back(v);
}

v32 Graph::bridgeUtil(int u, bool visited[], int disc[],int low[], int parent[], v32 vect){
	static int time = 0;
	visited[u] = true;
	disc[u] = low[u] = ++time;
	list<int>::iterator i;
	for (i = adj[u].begin(); i != adj[u].end(); ++i)
	{
		int v = *i; 

		if (!visited[v]){
			parent[v] = u;
			vect = bridgeUtil(v, visited, disc, low, parent,vect);
			low[u] = min(low[u], low[v]);
			if (low[v] > disc[u]){
			    vect[u]++;
                vect[v]++;
            }
		}
		else if (v != parent[u]){
			low[u] = min(low[u], disc[v]);
        }
	}
    return vect;
}

v32 Graph::bridge(){
	bool *visited = new bool[V];
	int *disc = new int[V];
	int *low = new int[V];
	int *parent = new int[V];
    v32 vect(V,0);
	for (int i = 0; i < V; i++)
	{
		parent[i] = -1;
		visited[i] = false;
	}
	for (int i = 0; i < V; i++){
		if (visited[i] == false){
			vect = bridgeUtil(i, visited, disc, low, parent,vect);
        }
    }
    return vect;
}

int main(){
    int v,r;
    cin>>v>>r;
    Graph g1(v);
    for(int i=0;i<r;i++){
        int a,b;
        cin>>a>>b;
        g1.addEdge(a,b);
    }
    v32 vect;
    vect = g1.bridge();
    cout<<*max_element(vect.begin(),vect.end())<<" "<<*min_element(vect.begin(),vect.end());
	return 0;
}


