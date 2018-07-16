/**
 * @name 单循环算法
 * @description  单循环赛制，是指所有参赛队在竞赛中均能相遇一次，
 * @description 最后按各队在竞赛中的得分多少、胜负场次来排列名次。 单循环一般在参赛队不太多，又有足够的竞赛时间才能采用。单循环由于参加竞赛的各队都有相遇比赛的机会， 是一种比较公平合理的比赛制度 [1]  。
 */



/** 
 * [1,2]
 * [1,3]
 * [1,4]
 * [2,3]
 * [2,4]
 * [3,4]
*/


const oddTeams = ['湖人', '火箭', '凯尔特人']
const evenTeams = ['湖人', '火箭', '凯尔特人','森林狼']
//轮次 队伍-1
//i=1  第一个队伍不动 逆时针循环

const teamHelper = {
    /**
     * @name 分配对战 战队
     * @param {Array} teams 参赛战队
     * @param {number} [fightTeam=2] 默认两个队伍对战
     * @returns fightTeam [[队伍1,队伍2],[队伍3,false]]  false代表无对手 此轮不打
     */
    allotfightTeam(teams = [], fightTeamSize = 2) {
        if (!Array.isArray(teams) || teams.length <= 1) {
            return teams
        }
        const newTeams = this.shuffleTeams(teams)

        let temp = 0
        const fightTeams = []
        const len = newTeams.length             //队伍数量
        const loopLength = len            //循环轮次 n-1
        const isOdd = !(len % 2 === 0)
        //如果是奇数队
        if (isOdd) {
            newTeams.push(false)
        }
        for (let k = 1; k <= loopLength; k++) {
            for (let i = 1; i < len; i++) {
                for (let j = 0; j <= len - j; j++) {
                    temp = newTeams[j]
                    newTeams[j] = newTeams[j + 1]
                    newTeams[j + 1] = temp
                }
            }
            const currentTeams = Array.from({ length: Math.ceil(len / fightTeamSize) }, (v, index) => {
                return newTeams.slice(index * fightTeamSize, index * fightTeamSize + fightTeamSize)
            })
            fightTeams.push(...currentTeams)
        }
        if (isOdd) {
            return fightTeams.filter(team => !team.includes(false))
        } else {
            return this.filterTeams(fightTeams)
        }
    },
    filterTeams(teams = []) {
        return teams.map(item => JSON.stringify(item))
            .filter((item, idx, arry) => idx === arry.indexOf(item))
            .map(item => JSON.parse(item))
    },
    shuffleTeams(teams = []){
        for(let i= teams.length-1;i>=0;i--){
            const randomIdx = Math.floor(Math.random()*(i+1))
            const itemIdx = teams[randomIdx]
            teams[randomIdx] = teams[i]
            teams[i] = itemIdx
        }
        return teams
    }
}

const t = teamHelper.allotfightTeam(evenTeams)
console.log(t);
console.log(teamHelper.allotfightTeam(oddTeams))

module.exports = teamHelper
