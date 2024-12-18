#include <bits/stdc++.h>
using namespace std;

#define int long long int
#define ll long long
#define MOD 1000000007
#define F first
#define S second
#define fast_io ios::sync_with_stdio(0);cin.tie(0);
int gcd(int a,int b){if(b==0)return a;else return gcd(b,a%b);}
int lcm(int a,int b){return a*b/gcd(a,b);}

void solve() {
    int a , b;
    cin >> a >> b;
    int ans = 0;
    while(a != b){
        if(a > b){
            ans += a-b;
            break;
        }
        int diff1 = abs(b - a);
        int diff2 = abs(b - 2*a);
        if(diff1 > diff2){
            a = 2*a;
            ans++;
        }else{
            ans += b-a;
            break;
        }
    }
    cout << ans << endl;
}

int32_t main()
{
    // #ifndef ONLINE_JUDGE
    // freopen("input.txt", "r", stdin);
    // freopen("output.txt", "w", stdout);
    // #endif
    fast_io;
    int t = 1;
    //cin>>t;
    while(t--) solve();
    return 0;
}