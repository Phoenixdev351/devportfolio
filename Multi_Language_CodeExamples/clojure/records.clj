; Clojure Records

(defrecord Person [name age])

(defn greet [person]
  (str "Hello, I'm " (:name person) " and I'm " (:age person) " years old"))

(let [person (Person. "Jack" 45)]
  (println (greet person)))
