if (window.matchMedia('screen and (max-width: 1000px)').matches) {
    let particleDensity = 3500;
    applyParticles(particleDensity);
} else if (window.matchMedia('screen and (max-width: 1920px)').matches) {
    let particleDensity = 1800;
    applyParticles(particleDensity);
}

function applyParticles(particleDensity) {
    particlesJS('particle', {
        'particles': {
            'number': {
                'value': 300,
                'density': {
                    'enable': true,
                    'value_area': particleDensity
                }
            },
            'color': {
                'value': '#fff'
            },
            'shape': {
                'type': '',
                'random': true,
                'stroke': {
                    'width': 0,
                    'color': 'red'
                },
                'polygon': {
                    'nb_sides': 6
                }
            },
            'opacity': {
                'value': 0.5,
                'random': true,
                'anim': {
                    'enable': false,
                    'speed': 1,
                    'opacity_min': 0.1,
                    'sync': false
                }
            },
            'size': {
                'value': 80,
                'random': true,
                'anim': {
                    'enable': true,
                    'speed_min': .2,
                    'size_min': 2,
                    'sync': false
                }
            },
            'line_linked': {
                'enable': true,
                'distance': 200,
                'color': '#fff',
                'opacity': .3,
                'width': .6
            },
            'move': {
                'enable': true,
                'speed_min': 6,
                'direction': 'none',
                'random': true,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                    'enable': false,
                    'rotateX': 1200,
                    'rotateY': 1200
                }
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': false,
                    'mode': 'grab'
                },
                'onclick': {
                    'enable': false,
                    'mode': 'push'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 400,
                    'line_linked': {
                        'opacity': 1
                    }
                },
                'repulse': {
                    'distance': 200,
                    'duration': 0.4
                },
                'push': {
                    'particles_nb': 4
                },
                'remove': {
                    'particles_nb': 2
                }
            }
        },
        'retina_detect': true
    });
}