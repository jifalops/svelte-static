#!/usr/bin/env bash

# Remember bash history on the local machine.
ln -s "$(pwd)/.devcontainer/.bash_history" ~/.bash_history

# Install the user's dotfiles from GitHub.
gh repo clone dotfiles ~/.dotfiles && ~/.dotfiles/install.sh
