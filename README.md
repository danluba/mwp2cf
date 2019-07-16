# mwp2cf
A Chrome Extension to automatically whitelist all ManageWP IP addresses in Cloudflare's IP Access Rules

## How to use it

1. Download and unzip the file.
2. Open Chrome and go to chrome://extensions
3. Enable developer mode in the top-right corner of the page
4. Click the "Load Unpacked" button in the top-left corner
5. Upload the "ManageWP 2 Cloudflare" folder thats inside the file you unzipped
6. A shiny new button will appear on your toolbar
7. Navigate to Firewall > Tools in your Cloudflare acount and click the button to enter the ManageWP IP addresses
8. If you need to stop this train, just refresh the page
9. Wait for an alert telling you the addresses have all been attempted, then check that they're all there in your Cloudflare account. This plugin is very basic and will not check for, nor attempt to correct, anything that goes wrong. If your internet drops out for a moment or whatever, you might need to find and enter a couple of addresses by hand.

Have fun.
