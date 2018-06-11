# test-repo
Hello my name is Richard
Second driver takes over:

Clone the shared repo
Add the text 'Hello my name is ' to README.md and save
Check the status: - git status
Check the diff: - git diff
Add the file to the staging area
git add . or git add <filename> (Tip: use the tab)
Commit the staged changes
git commit -m 'your message'
Push the commit
git push -u origin master
Inspect the changes on gitHub
First driver:

Pull the code
Make another change to README.md
Check the diff git diff
Revert your changes:
git checkout -- <filename>
(NOTE: You need a space between the -- and filename)
git status - working tree should be clean
Make a different change, save, commit, push
Rinse and repeat a few times until you're comfortable with the process