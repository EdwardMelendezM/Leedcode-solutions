type Tuple struct {
    Row int
    Col int
}

func isValidSudoku(board [][]byte) bool {
    rows := make(map[int]map[byte]bool)
    cols := make(map[int]map[byte]bool)
    boxes := make(map[Tuple]map[byte]bool)

    for i := 0; i < 9; i++ {
        for j := 0; j < 9; j++ {
            value := board[i][j]

            if value == '.' {
                continue // Ignorar celdas vacías
            }

            // Inicializar mapas si no existen
            if rows[i] == nil {
                rows[i] = make(map[byte]bool)
            }
            if cols[j] == nil {
                cols[j] = make(map[byte]bool)
            }
            box := Tuple{Row: i / 3, Col: j / 3}
            if boxes[box] == nil {
                boxes[box] = make(map[byte]bool)
            }

            // Verificar duplicados
            if rows[i][value] || cols[j][value] || boxes[box][value] {
                return false
            }

            // Marcar el valor como visto
            rows[i][value] = true
            cols[j][value] = true
            boxes[box][value] = true
        }
    }

    return true
}
