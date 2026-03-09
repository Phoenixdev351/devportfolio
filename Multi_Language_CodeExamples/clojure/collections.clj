; Clojure Collections

(def numbers [1 2 3 4 5])

(println "Original:" numbers)

(let [doubled (map #(* % 2) numbers)]
  (println "Doubled:" doubled))

(println "Sum:" (reduce + numbers))
