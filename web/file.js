/*
 * Copyright 2010 by Dan Fabulich.
 * 
 * Dan Fabulich licenses this file to you under the
 * ChoiceScript License, Version 1.0 (the "License"); you may
 * not use this file except in compliance with the License. 
 * You may obtain a copy of the License at
 * 
 *  http://www.choiceofgames.com/LICENSE-1.0.txt
 * 
 * See the License for the specific language governing
 * permissions and limitations under the License.
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied.
 */
function clearScreen(code) {
    // can't create div via innerHTML; div mysteriously doesn't show up on iOS
    main.innerHTML = "";
    var text = document.createElement("div");
    text.setAttribute("id", "text");
    main.appendChild(text);
    
    var useAjax = true;
    
    if (useAjax) {
      doneLoading();
      setTimeout(function() { window.scrollTo(0,0); }, 0);
      code.call();
    } else {
      startLoading();
      var axn = window.location.protocol + "//" + window.location.host + window.location.pathname;
      var current = window.location.href;
      if (axn == window.location.href) {
        window.location.reload();
      } else {
        window.location.href = axn;
      }
    }
}
