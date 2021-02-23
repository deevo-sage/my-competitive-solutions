function sides(literals, ...expressions) {
    let area=expressions[0],peri=expressions[1];
    let s1=(peri + Math.sqrt(peri*peri -16*area))/4;
    let s2=(peri - Math.sqrt(peri*peri -16*area))/4;
    return [s2,s1];
    }
    
    
    function main() {
        let s1 = +(readLine());
        let s2 = +(readLine());
        
        [s1, s2] = [s1, s2].sort();
        
        const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
        
        console.log((s1 === x) ? s1 : -1);
        console.log((s2 === y) ? s2 : -1);
    }