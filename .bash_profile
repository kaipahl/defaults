# Git functions
function parse_git_dirty {
  [[ $(git status 2> /dev/null | tail -n1) != "nothing to commit (working directory clean)" ]] && echo "*"
}
function parse_git_branch {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/[\1$(parse_git_dirty)]/"
}

export PS1='\n\[\033[42;30m\] \t \[\033[0;32m\] \u@\h \[\033[0;32m\]$(parse_git_branch)\[\033[0;36m\] \w >\[\033[0m\] '

export PATH="$HOME/bin:$PATH"
export PATH="/usr/local/bin:$PATH"
export EDITOR=nano

# homebrew
export PATH="/usr/local/sbin:$PATH"

# mysql
export PATH="/usr/local/mysql/bin:$PATH"

# Slimerjs
export SLIMERJSLAUNCHER="/Applications/Firefox.app/Contents/MacOS/firefox"
export PATH="$HOME/sites/patternlab/slimerjs-0.9.5:$PATH"

# node
export PATH="./node_modules/.bin:$PATH"

# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# Java
export JAVA_HOME="/usr/libexec/java_home"

# Maven
# export M2_HOME=/usr/share/maven/current
export M2_HOME="$HOME/bin/apache-maven-3.0.5"
export M2=$M2_HOME/bin
export PATH="$PATH:$M2"
export MAVEN_OPTS="-Dfile.encoding=UTF-8 -Xms256m -Xmx1024m -XX:PermSize=64m -XX:MaxPermSize=256m"

# python
export PATH="/usr/local/Cellar/python/2.7.13/bin:$PATH"
export WORKON_HOME=~/virtualenvs
source /usr/local/bin/virtualenvwrapper.sh

#rvm -- has to be last line!
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*export PATH="/usr/local/sbin:$PATH"
eval "$(rbenv init -)"

# Reload .bash_profile --> source ~/.bash_profile
