// Delta Storage source control software stores 
// versions of files in diffs. In other words, 
// if a developer added 3 lines to myfile.txt, 
// then those three line additions will be what gets committed.

function reconstruct (changes) {
  var add = [];
  var splice = Array.prototype.splice

 changes.forEach(function (line){
    line.forEach(function (edit){
    if (edit.type === 'add'){
      var newLine = edit.text.trim().split('\n')
      splice.apply(add,[edit.line,0].concat(newLine))
    }
    else {
     add.splice(edit.line, edit.count)
    }
  })
 })
  return add.join('\n')+'\n'
}

