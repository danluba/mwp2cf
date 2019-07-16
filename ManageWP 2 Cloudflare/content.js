ipList = `

34.211.180.66
54.70.65.107
34.210.224.7
52.41.5.108
52.35.72.129
35.162.254.253
52.11.12.231
52.11.29.70
52.11.54.161
52.24.142.159
52.25.191.255
52.27.181.126
52.34.126.117
52.34.254.47
52.35.82.99
52.36.28.80
52.38.106.97
52.39.177.152
52.41.230.148
52.41.237.12
52.42.126.166
52.43.13.71
52.43.76.224
52.88.96.110
52.89.155.51
54.148.73.118
54.186.37.105
54.187.92.57
54.191.32.65
54.191.67.23
54.191.80.119
54.191.135.209
54.191.136.176
54.191.137.17
54.191.148.85
54.191.149.8
52.26.122.21
52.24.187.29
52.89.85.107
54.186.128.167
54.191.40.136
52.24.62.11
52.88.119.122
54.191.148.225
54.191.151.18
52.89.94.121
52.25.116.116
52.88.215.225
54.186.143.184
52.88.197.180
52.27.171.126

`.split('\n')
.filter(
    (element) => {
        return element != ""
    } 
);

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if ( request.message === "go" && window.location.pathname.slice(-14) == "firewall/tools") {
      
    	try {

    		var ipBox = document.getElementsByClassName('input-rule-configuration-value')[0];
			var action = document.querySelectorAll('.input-rule-action.select2-offscreen')[0];
			var note = document.getElementsByClassName('input-rule-notes')[0];
			var add = document.getElementsByClassName('btn-primary action-accept')[0];

			ipList.forEach(
				( ip, index ) => {
					setTimeout( 
						() => {
							ipBox.value = ip;
							action.value = "whitelist";
							note.value = "ManageWP";
							add.click();
						}, 5000 * index
					);
				}
			);

			setTimeout(
				() => {
					alert(`${ipList.length} IP addresses were attempted. Please check they're all there.`);
				}, ipList.length * 5000
			);

		}

		catch(err) {

			alert(err);
		}
    }
  }
);
