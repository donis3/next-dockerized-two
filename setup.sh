#!/bin/bash

# Create user
sudo adduser automation
sudo usermod -aG automation automation
w
# Generate SSH key on server
sudo -u automation ssh-keygen -t ed25519 -C 'donis3@gmail.com' -f /home/automation/.ssh/id_ed25519

# Add public key to authorized_keys file
sudo -u automation sh -c 'cat /home/automation/.ssh/id_ed25519.pub >> /home/automation/.ssh/authorized_keys'
sudo chmod 700 /home/automation/.ssh
sudo chmod 600 /home/automation/.ssh/authorized_keys

# Add GitHub to known hosts
sudo -u automation ssh-keyscan -t rsa github.com >> /home/automation/.ssh/known_hosts