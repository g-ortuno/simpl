/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

window.addEventListener('message', function(event) {
  log('Sent a message to event.origin ' + event.origin +
    ' and got the following in response:');
  log('<em>' + event.data + '</em>');
});
var other = window.open('https://simpl.info/postmessage/popup/other.html', '_blank', 'height=200,width=150,toolbar=0,menubar=0,location=0');


window.setTimeout(() => other.postMessage('Hi! this is a message from index.html.', '*'), 1000);

window.setTimeout(() => other.close(), 5000);

function log(message) {
  document.getElementById('data').innerHTML += message + '<br /><br />';
}
