// Chaos Zoo Game - Interactive and Hilarious!

class ZooGame {
    constructor() {
        this.chaosScore = 0;
        this.friendsCount = 0;
        this.funRating = 0;
        this.inventory = [];
        this.currentScene = 0;
        this.gameState = {};
        this.initializeScenes();
    }

    initializeScenes() {
        this.scenes = [
            // Scene 0: The Entrance
            {
                animal: '🦁',
                dialogue: "ROAAARRR! Welcome to Chaos Zoo! I'm Larry the Lion, and I'm supposed to be king... but honestly, I'd rather take a nap. Want to help me deal with the chaos today?",
                description: "You stand at the entrance of the most disorganized zoo in history. A lion is napping in the ticket booth, and you can hear distant screaming (probably the peacocks showing off again).",
                choices: [
                    {
                        emoji: '👑',
                        text: "Help Larry reclaim his throne as king!",
                        next: 1,
                        chaos: 5,
                        friends: 1,
                        item: '👑 Tiny Crown'
                    },
                    {
                        emoji: '🎪',
                        text: "Suggest a zoo talent show instead!",
                        next: 2,
                        chaos: 10,
                        friends: 2,
                        item: '🎪 Ringmaster Hat'
                    },
                    {
                        emoji: '🍕',
                        text: "Order pizza for everyone!",
                        next: 3,
                        chaos: 15,
                        friends: 3,
                        item: '🍕 Pizza Coupon'
                    }
                ]
            },

            // Scene 1: Larry's Quest
            {
                animal: '🦁',
                dialogue: "Thanks for the tiny crown! It doesn't really fit on my massive mane, but the effort counts. Now, the penguins have been hogging the best napping spots. Can you help?",
                description: "Larry leads you to the penguin enclosure where a group of penguins are having what appears to be a formal board meeting on the comfiest rocks.",
                choices: [
                    {
                        emoji: '💼',
                        text: "Join their board meeting professionally",
                        next: 4,
                        chaos: 3,
                        friends: 2,
                        item: '💼 Penguin Business Card'
                    },
                    {
                        emoji: '🎭',
                        text: "Challenge them to a dance-off!",
                        next: 5,
                        chaos: 12,
                        friends: 4,
                        item: '🕺 Dance Trophy'
                    },
                    {
                        emoji: '🐟',
                        text: "Bribe them with fancy fish",
                        next: 6,
                        chaos: 8,
                        friends: 3,
                        item: '🐟 Golden Fish'
                    }
                ]
            },

            // Scene 2: Talent Show Time!
            {
                animal: '🦚',
                dialogue: "Did someone say TALENT SHOW?! I've been practicing my feather choreography for YEARS! I'm Patty the Peacock, and I'm absolutely FABULOUS!",
                description: "Word spreads fast. Every animal in the zoo is now preparing their act. The flamingos are arguing about who's pinker, and the elephants are practicing synchronized trunk movements.",
                choices: [
                    {
                        emoji: '🎤',
                        text: "Host a singing competition",
                        next: 7,
                        chaos: 20,
                        friends: 5,
                        item: '🎤 Golden Microphone'
                    },
                    {
                        emoji: '🎨',
                        text: "Organize an art show instead",
                        next: 8,
                        chaos: 10,
                        friends: 4,
                        item: '🎨 Paintbrush'
                    },
                    {
                        emoji: '🎯',
                        text: "Make it a circus skills competition!",
                        next: 9,
                        chaos: 25,
                        friends: 6,
                        item: '🎯 Juggling Balls'
                    }
                ]
            },

            // Scene 3: Pizza Party Chaos!
            {
                animal: '🐻',
                dialogue: "PIZZA?! I'm Benny the Bear, and I haven't had pizza since that camping trip gone wrong in '08! But wait... do you know about our dietary restrictions?",
                description: "The pizza arrives and absolute pandemonium ensues. The vegetarian animals are arguing with the carnivores about toppings. A giraffe accidentally ate an entire pizza box.",
                choices: [
                    {
                        emoji: '🥗',
                        text: "Order salad pizzas for herbivores",
                        next: 10,
                        chaos: 7,
                        friends: 4,
                        item: '🥗 Veggie Menu'
                    },
                    {
                        emoji: '🎲',
                        text: "Play rock-paper-scissors for slices",
                        next: 11,
                        chaos: 18,
                        friends: 5,
                        item: '🎲 Lucky Dice'
                    },
                    {
                        emoji: '🍰',
                        text: "Forget pizza, order CAKE!",
                        next: 12,
                        chaos: 30,
                        friends: 8,
                        item: '🍰 Party Cake'
                    }
                ]
            },

            // Scene 4: Professional Penguins
            {
                animal: '🐧',
                dialogue: "Ah yes, welcome to the Penguin Productivity Initiative. I'm Percy, CEO of Ice. We've been discussing the thermal efficiency of our pool. Would you like to invest?",
                description: "The penguins have spreadsheets, PowerPoint presentations, and tiny business suits. This is the most organized part of the zoo.",
                choices: [
                    {
                        emoji: '📊',
                        text: "Present a counter-proposal with charts",
                        next: 13,
                        chaos: 5,
                        friends: 3,
                        item: '📊 Spreadsheet'
                    },
                    {
                        emoji: '🎉',
                        text: "Declare mandatory fun time!",
                        next: 14,
                        chaos: 15,
                        friends: 6,
                        item: '🎉 Party Popper'
                    }
                ]
            },

            // Scene 5: Dance Battle!
            {
                animal: '🐧',
                dialogue: "You want to DANCE?! Fine! We penguins invented the moonwalk! No wait, that was someone else... We invented the waddle-walk!",
                description: "The penguins accept your challenge. A dance floor magically appears (the otters were hiding it). A flamingo DJ starts dropping sick beats.",
                choices: [
                    {
                        emoji: '🦩',
                        text: "Team up with flamingos for synchronized moves",
                        next: 15,
                        chaos: 12,
                        friends: 7,
                        item: '🦩 Pink Boa'
                    },
                    {
                        emoji: '🎸',
                        text: "Start a rock band with the monkeys",
                        next: 16,
                        chaos: 22,
                        friends: 8,
                        item: '🎸 Electric Guitar'
                    }
                ]
            },

            // Scene 6: Fish Negotiations
            {
                animal: '🐧',
                dialogue: "Hmm, interesting offer. But we only accept PREMIUM fish. Organic, free-range, ethically sourced... you know, the fancy stuff.",
                description: "The penguins are surprisingly picky eaters. One penguin pulls out a fish quality certification document.",
                choices: [
                    {
                        emoji: '🎣',
                        text: "Go fishing in the zoo pond",
                        next: 17,
                        chaos: 10,
                        friends: 4,
                        item: '🎣 Fishing Rod'
                    },
                    {
                        emoji: '🌟',
                        text: "Declare ALL fish are premium fish!",
                        next: 18,
                        chaos: 8,
                        friends: 5,
                        item: '🌟 Fish Certificate'
                    }
                ]
            },

            // Scene 7: The Big Concert!
            {
                animal: '🦜',
                dialogue: "SQUAWK! I'm Polly and I've got PIPES! I can hit notes so high that only dogs can hear them! Watch this... 🎵 SQUAAAAAAWK! 🎵",
                description: "The talent show is in full swing! A wolf is attempting opera, the seals are doing a cappella, and somewhere a hippo is beatboxing.",
                choices: [
                    {
                        emoji: '🏆',
                        text: "Everyone wins a trophy!",
                        next: 19,
                        chaos: 15,
                        friends: 10,
                        item: '🏆 Participation Trophy'
                    },
                    {
                        emoji: '📺',
                        text: "Turn it into a reality TV show!",
                        next: 20,
                        chaos: 25,
                        friends: 12,
                        item: '📺 TV Contract'
                    }
                ]
            },

            // Scene 8: Art Exhibition
            {
                animal: '🐘',
                dialogue: "Wonderful! I'm Eleanor the Elephant, and I paint with my trunk! It's called 'abstract expressionism' but honestly I just sneeze on the canvas.",
                description: "The zoo transforms into an art gallery. The monkeys are throwing paint (literally), and the zebras' stripes are inspiring everyone.",
                choices: [
                    {
                        emoji: '🖼️',
                        text: "Auction the art to rich humans",
                        next: 21,
                        chaos: 12,
                        friends: 8,
                        item: '🖼️ Famous Painting'
                    },
                    {
                        emoji: '🎭',
                        text: "Make it interactive performance art!",
                        next: 22,
                        chaos: 20,
                        friends: 11,
                        item: '🎭 Art Critic Badge'
                    }
                ]
            },

            // Scene 9: Circus Spectacular!
            {
                animal: '🐒',
                dialogue: "Ooh ooh ah ah! I'm Marvin the Monkey and I can juggle ANYTHING! Bananas, coconuts, other monkeys... Okay that last one got weird.",
                description: "The circus is incredible! Tigers are jumping through hoops of fire (which they set themselves), bears are riding unicycles, and the snakes are doing... well, they're trying.",
                choices: [
                    {
                        emoji: '🎪',
                        text: "Invite the whole city to watch!",
                        next: 23,
                        chaos: 35,
                        friends: 15,
                        item: '🎪 Circus Tent'
                    },
                    {
                        emoji: '🎬',
                        text: "Film it for social media fame!",
                        next: 24,
                        chaos: 28,
                        friends: 13,
                        item: '🎬 Viral Video'
                    }
                ]
            },

            // Scene 10: Healthy Choices
            {
                animal: '🦒',
                dialogue: "Thank you for considering our dietary needs! I'm Gerald the Giraffe, and I appreciate the salad pizza, even though I ate the box. Cardboard is basically fiber, right?",
                description: "The vegetarian animals are pleased! The carnivores are less excited but they found some pepperoni in the zoo cafe.",
                choices: [
                    {
                        emoji: '🥤',
                        text: "Make smoothies for everyone!",
                        next: 25,
                        chaos: 10,
                        friends: 7,
                        item: '🥤 Blender'
                    },
                    {
                        emoji: '🎊',
                        text: "Start a healthy eating club!",
                        next: 26,
                        chaos: 6,
                        friends: 9,
                        item: '🎊 Club Membership'
                    }
                ]
            },

            // Scene 11: Rock Paper Scissors Tournament
            {
                animal: '🦘',
                dialogue: "G'day mate! I'm Kevin the Kangaroo! In Australia, we settle EVERYTHING with rock-paper-scissors! Well, that and drop bears, but we don't talk about those...",
                description: "An epic tournament begins! The octopus has an unfair advantage with 8 tentacles, but everyone's having too much fun to care.",
                choices: [
                    {
                        emoji: '🏅',
                        text: "Create an international championship!",
                        next: 27,
                        chaos: 20,
                        friends: 11,
                        item: '🏅 Championship Belt'
                    },
                    {
                        emoji: '🎮',
                        text: "Turn it into a video game!",
                        next: 28,
                        chaos: 16,
                        friends: 10,
                        item: '🎮 Game Console'
                    }
                ]
            },

            // Scene 12: CAKE EXPLOSION!
            {
                animal: '🐼',
                dialogue: "CAKE?! I'm Penny the Panda and cake is my FAVORITE! Forget bamboo, I've been lying to everyone! My whole life is a LIE! I LOVE CAKE!",
                description: "You've ordered the biggest cake in history! It's 15 tiers tall! Animals are diving into it! The penguins are using it as a slide! This is beautiful chaos!",
                choices: [
                    {
                        emoji: '🎆',
                        text: "Add fireworks to the celebration!",
                        next: 29,
                        chaos: 40,
                        friends: 16,
                        item: '🎆 Fireworks'
                    },
                    {
                        emoji: '🎵',
                        text: "Start a conga line around the cake!",
                        next: 30,
                        chaos: 35,
                        friends: 14,
                        item: '🎵 Boom Box'
                    }
                ]
            },

            // Scene 13-30: Quick resolution scenes
            {
                animal: '🐧',
                dialogue: "Impressive spreadsheet work! We'll consider your proposal at our next quarterly meeting in 3 months. But for now... want to slide down the ice ramp? It's actually pretty fun!",
                description: "The penguins loosen up a bit. Business and fun can coexist!",
                choices: [{ emoji: '🎯', text: "Continue the adventure!", next: 31, chaos: 5, friends: 4 }]
            },
            {
                animal: '🎉',
                dialogue: "MANDATORY FUN TIME ACTIVATED! The penguins don't know what to do with themselves! They're... they're actually smiling!",
                description: "Percy the CEO penguin does his first belly slide in years and remembers why he became a penguin in the first place!",
                choices: [{ emoji: '🌟', text: "Continue the adventure!", next: 31, chaos: 15, friends: 7 }]
            },
            {
                animal: '🦩',
                dialogue: "Darling, our synchronized routine was STUNNING! We're fabulous, you're fabulous, everyone's fabulous!",
                description: "The flamingos and you create a viral dance video. The penguins admit defeat but gain new dance moves!",
                choices: [{ emoji: '💃', text: "Continue the adventure!", next: 31, chaos: 12, friends: 8 }]
            },
            {
                animal: '🎸',
                dialogue: "🎸 We are the CHAMPIONS, my friend! 🎸 The monkey band shreds an epic guitar solo!",
                description: "Your rock band 'The Primal Scream' becomes a zoo legend. Even the sloths are headbanging... very slowly.",
                choices: [{ emoji: '🤘', text: "Continue the adventure!", next: 31, chaos: 22, friends: 9 }]
            },
            {
                animal: '🎣',
                dialogue: "You caught a boot! And a old bicycle! And... wait, is that a treasure chest?!",
                description: "The zoo pond contains mysteries! The fish aren't premium, but the adventure was worth it!",
                choices: [{ emoji: '💎', text: "Continue the adventure!", next: 31, chaos: 10, friends: 5, item: '💎 Treasure' }]
            },
            {
                animal: '🌟',
                dialogue: "You know what? You're absolutely right! ALL fish are premium when you believe in yourself! - Ancient Penguin Wisdom",
                description: "The penguins are inspired by your confidence and adopt a more positive outlook on life!",
                choices: [{ emoji: '✨', text: "Continue the adventure!", next: 31, chaos: 8, friends: 6 }]
            },
            {
                animal: '🏆',
                dialogue: "Everyone's a winner! The participation trophies are HUGE! The elephants can barely carry theirs!",
                description: "Self-esteem at the zoo has never been higher! The snails are feeling especially confident!",
                choices: [{ emoji: '🎊', text: "Continue the adventure!", next: 31, chaos: 15, friends: 11 }]
            },
            {
                animal: '📺',
                dialogue: "Welcome to 'Zoo's Got Talent'! I'm your host, and we've gone VIRAL! Netflix is calling!",
                description: "The show is a massive hit! The zoo gets rich! The animals get their own trailers!",
                choices: [{ emoji: '⭐', text: "Continue the adventure!", next: 31, chaos: 25, friends: 13 }]
            },
            {
                animal: '🖼️',
                dialogue: "SOLD to the fancy human in the top hat! That painting of random trunk marks just went for $50,000!",
                description: "The art auction is a huge success! The zoo can now afford heated rocks for the reptiles!",
                choices: [{ emoji: '💰', text: "Continue the adventure!", next: 31, chaos: 12, friends: 9 }]
            },
            {
                animal: '🎭',
                dialogue: "You ARE the art! We're ALL the art! Everything is art! *throws paint everywhere*",
                description: "The performance art gets deep... and messy! But everyone feels creatively fulfilled!",
                choices: [{ emoji: '🎨', text: "Continue the adventure!", next: 31, chaos: 20, friends: 12 }]
            },
            {
                animal: '🎪',
                dialogue: "Ladies and gentlemen, children of all ages! Welcome to the GREATEST ZOO ON EARTH!",
                description: "The city comes to watch! The circus is incredible! The mayor wants to make it permanent!",
                choices: [{ emoji: '🌃', text: "Continue the adventure!", next: 31, chaos: 35, friends: 16 }]
            },
            {
                animal: '🎬',
                dialogue: "We're trending WORLDWIDE! #ChaosZoo is NUMBER ONE! We're more popular than cat videos!",
                description: "The viral video brings fame and fortune! Tourist booking skyrocket! The sloths still don't care!",
                choices: [{ emoji: '📱', text: "Continue the adventure!", next: 31, chaos: 28, friends: 14 }]
            },
            {
                animal: '🥤',
                dialogue: "These smoothies are AMAZING! Is... is that a carrot in there? I can't taste it!",
                description: "The smoothie bar becomes the new hot spot! Even the picky eaters are drinking their vegetables!",
                choices: [{ emoji: '🌈', text: "Continue the adventure!", next: 31, chaos: 10, friends: 8 }]
            },
            {
                animal: '🎊',
                dialogue: "Welcome to the Healthy Zoo Club! Rule #1: Cardboard boxes don't count as fiber, Gerald!",
                description: "The animals are getting fit! The hippos start yoga! Everyone feels great!",
                choices: [{ emoji: '🧘', text: "Continue the adventure!", next: 31, chaos: 6, friends: 10 }]
            },
            {
                animal: '🏅',
                dialogue: "The WORLD Rock-Paper-Scissors Championship is being held at our zoo! The queen is coming!",
                description: "The tournament goes international! It's on ESPN! The octopus is still dominating!",
                choices: [{ emoji: '👑', text: "Continue the adventure!", next: 31, chaos: 20, friends: 12 }]
            },
            {
                animal: '🎮',
                dialogue: "The video game 'Zoo Fighter: Roshambo Edition' just dropped! It's already winning awards!",
                description: "The game is a hit! The animals get royalties! The arcade cabinet features real animal sounds!",
                choices: [{ emoji: '🕹️', text: "Continue the adventure!", next: 31, chaos: 16, friends: 11 }]
            },
            {
                animal: '🎆',
                dialogue: "The fireworks spell out 'CAKE' in the sky! This is the best day of my life! - Every animal",
                description: "The celebration is legendary! They'll talk about this day for generations!",
                choices: [{ emoji: '✨', text: "Finish the adventure!", next: 32, chaos: 40, friends: 17 }]
            },
            {
                animal: '🎵',
                dialogue: "🎶 Everybody conga! 🎶 The line wraps around the zoo THREE times!",
                description: "The conga line is visible from space! Someone calls the news! This is peak chaos!",
                choices: [{ emoji: '🎺', text: "Finish the adventure!", next: 32, chaos: 35, friends: 15 }]
            },

            // Scene 31: Grand Finale Setup
            {
                animal: '🦁',
                dialogue: "You know what? I don't need to be king. I just needed friends and fun! Thanks for making this the best day ever at Chaos Zoo!",
                description: "All the animals gather together. The chaos has brought everyone closer. The zoo has never been happier!",
                choices: [
                    {
                        emoji: '🎉',
                        text: "Throw a massive celebration!",
                        next: 32,
                        chaos: 25,
                        friends: 10
                    },
                    {
                        emoji: '📸',
                        text: "Take a group photo!",
                        next: 32,
                        chaos: 10,
                        friends: 8
                    }
                ]
            },

            // Scene 32: The End!
            {
                animal: '🌟',
                dialogue: "You've made Chaos Zoo the happiest place on Earth! Thanks for the wild ride!",
                description: "As the sun sets on Chaos Zoo, you realize that sometimes chaos is exactly what everyone needs. The animals throw you a surprise party with cake (again), and name you 'Honorary Animal of the Year'!",
                choices: [],
                end: true
            }
        ];
    }

    startGame() {
        this.chaosScore = 0;
        this.friendsCount = 0;
        this.funRating = 0;
        this.inventory = [];
        this.currentScene = 0;
        this.showScreen('game-screen');
        this.loadScene(0);
        this.createParticles('🎉', 5);
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    loadScene(sceneIndex) {
        this.currentScene = sceneIndex;
        const scene = this.scenes[sceneIndex];

        if (scene.end) {
            this.endGame();
            return;
        }

        // Update animal and dialogue
        const animalEmoji = document.getElementById('animal-emoji');
        const animalDialogue = document.getElementById('animal-dialogue');
        animalEmoji.textContent = scene.animal;
        animalDialogue.textContent = scene.dialogue;

        // Update scene description
        document.getElementById('scene-text').textContent = scene.description;

        // Update choices
        this.renderChoices(scene.choices);

        // Update stats
        this.updateStats();

        // Add entrance animation
        animalEmoji.style.animation = 'none';
        setTimeout(() => {
            animalEmoji.style.animation = '';
        }, 10);
    }

    renderChoices(choices) {
        const container = document.getElementById('choices-container');
        container.innerHTML = '';

        choices.forEach((choice, index) => {
            const button = document.createElement('div');
            button.className = 'choice-btn';
            button.innerHTML = `
                <span class="choice-emoji">${choice.emoji}</span>
                <span class="choice-text">${choice.text}</span>
            `;
            button.onclick = () => this.makeChoice(choice);

            // Stagger animation
            setTimeout(() => {
                container.appendChild(button);
            }, index * 100);
        });
    }

    makeChoice(choice) {
        // Update scores
        this.chaosScore += choice.chaos || 0;
        this.friendsCount += choice.friends || 0;
        this.funRating = Math.min(100, this.funRating + (choice.chaos || 0) + (choice.friends || 0));

        // Add item to inventory
        if (choice.item) {
            this.inventory.push(choice.item);
            this.updateInventory();
            this.createParticles('✨', 3);
        }

        // Create fun particles based on choice
        const particles = ['🎊', '⭐', '💫', '🌟', '✨'];
        this.createParticles(particles[Math.floor(Math.random() * particles.length)], 5);

        // Update stats
        this.updateStats();

        // Load next scene
        setTimeout(() => {
            this.loadScene(choice.next);
        }, 500);
    }

    updateStats() {
        document.getElementById('chaos-score').textContent = this.chaosScore;
        document.getElementById('friends-count').textContent = this.friendsCount;
        document.getElementById('fun-rating').textContent = this.funRating + '%';
    }

    updateInventory() {
        const container = document.getElementById('inventory-items');

        if (this.inventory.length === 0) {
            container.innerHTML = '<span class="empty-inventory">Nothing yet...</span>';
        } else {
            container.innerHTML = this.inventory.map(item =>
                `<span class="inventory-item">${item}</span>`
            ).join('');
        }
    }

    createParticles(emoji, count) {
        const container = document.getElementById('particles');

        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.textContent = emoji;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (2 + Math.random() * 2) + 's';

                container.appendChild(particle);

                setTimeout(() => {
                    particle.remove();
                }, 3000);
            }, i * 100);
        }
    }

    endGame() {
        this.showScreen('end-screen');

        // Calculate achievement
        let achievement = '';
        let endTitle = '';
        let endMessage = '';
        let endAnimal = '';

        if (this.chaosScore > 100) {
            endTitle = '🎊 ULTIMATE CHAOS MASTER! 🎊';
            endMessage = "You've turned the zoo into the most gloriously chaotic place on Earth! The animals worship you as the God of Fun! The zookeepers have given up and joined the party!";
            endAnimal = '🎉';
            achievement = '🏆 Achievement Unlocked: "Chaos Reigns Supreme!" - You created so much chaos that physics itself got confused!';
        } else if (this.chaosScore > 50) {
            endTitle = '🎪 Chaos Conductor Extraordinaire! 🎪';
            endMessage = "You've brought the perfect amount of chaos! The zoo is fun, exciting, and only slightly on fire! The animals consider you a legend!";
            endAnimal = '🌟';
            achievement = '🏅 Achievement Unlocked: "Balanced Chaos!" - You found the sweet spot between order and madness!';
        } else {
            endTitle = '🌈 Harmony Helper! 🌈';
            endMessage = "You've brought joy and friendship without too much chaos! The zoo is peaceful, happy, and the insurance premiums are manageable!";
            endAnimal = '😊';
            achievement = '⭐ Achievement Unlocked: "Peaceful Paradise!" - You proved that fun doesn\'t always need chaos!';
        }

        if (this.friendsCount > 15) {
            endMessage += " You made SO many friends that the zoo needs to build a bigger friend zone!";
        }

        if (this.inventory.length > 8) {
            endMessage += " Your collection of random items is so impressive that a museum wants to display it!";
        }

        document.getElementById('end-title').textContent = endTitle;
        document.getElementById('end-message').textContent = endMessage;
        document.getElementById('end-animal').textContent = endAnimal;
        document.getElementById('achievement').textContent = achievement;

        // Update final stats
        document.getElementById('final-chaos').textContent = this.chaosScore;
        document.getElementById('final-friends').textContent = this.friendsCount;
        document.getElementById('final-fun').textContent = this.funRating + '%';

        // Create celebration particles
        this.createParticles('🎊', 10);
        setTimeout(() => this.createParticles('⭐', 10), 500);
        setTimeout(() => this.createParticles('🎉', 10), 1000);
    }

    restartGame() {
        this.showScreen('start-screen');
        this.inventory = [];
        this.updateInventory();
    }

    shareScore() {
        const text = `I just scored ${this.chaosScore} chaos points and made ${this.friendsCount} friends at Chaos Zoo! Can you beat my score? 🦁🎉`;

        if (navigator.share) {
            navigator.share({
                title: 'Chaos Zoo Score',
                text: text,
            }).catch(() => {
                this.copyToClipboard(text);
            });
        } else {
            this.copyToClipboard(text);
        }
    }

    copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        alert('Score copied to clipboard! Share it with your friends! 🎉');
    }
}

// Initialize game
const game = new ZooGame();

// Add click effect on animal emoji
document.addEventListener('DOMContentLoaded', () => {
    const animalEmoji = document.getElementById('animal-emoji');
    if (animalEmoji) {
        animalEmoji.addEventListener('click', function() {
            this.style.transform = 'scale(1.3) rotate(15deg)';
            game.createParticles('💕', 3);
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.getElementById('start-screen').classList.contains('active')) {
        game.startGame();
    }

    // Number keys for choices
    if (e.key >= '1' && e.key <= '9') {
        const choices = document.querySelectorAll('.choice-btn');
        const index = parseInt(e.key) - 1;
        if (choices[index]) {
            choices[index].click();
        }
    }
});

// Easter eggs
let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 50) {
        game.createParticles('🦄', 1);
        alert('🦄 Secret Achievement: "Click Champion!" - You clicked 50 times! Here\'s a unicorn!');
    }
});
