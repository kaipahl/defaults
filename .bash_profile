# Git functions
function parse_git_dirty {
  [[ $(git status 2> /dev/null | tail -n1) != "nothing to commit (working directory clean)" ]] && echo "*"
}
function parse_git_branch {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/[\1$(parse_git_dirty)]/"
}

export PS1='\n\[\033[42;30m\] \t \[\033[0;32m\] \u@\h \[\033[0;32m\]$(parse_git_branch)\[\033[0;36m\] \w >\[\033[0m\] '

# homebrew
export PATH="/usr/local/sbin:$PATH"

# mysql
export PATH="/usr/local/mysql/bin:$PATH"

# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
eval "$(rbenv init -)"

# Ruby
eval "$(rbenv init -)"

# python
export PATH="/usr/local/Cellar/python/2.7.13/bin:$PATH"
export WORKON_HOME=~/virtualenvs
source /usr/local/bin/virtualenvwrapper.sh

# Reload .bash_profile --> source ~/.bash_profile
