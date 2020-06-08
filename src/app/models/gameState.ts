export interface GameState {
    players: {
        player: {
            activePokemon: {
                health: null,
                speed: null,
                attack: null,
                defense: null
            }
        },
        opponent: {
            activePokemon: {
                health: null,
                speed: null,
                attack: null,
                defense: null
            }
        }
    };
}
