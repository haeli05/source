(module
 (type $FUNCSIG$vijjj (func (param i32 i64 i64 i64)))
 (type $FUNCSIG$vij (func (param i32 i64)))
 (type $FUNCSIG$vii (func (param i32 i32)))
 (type $FUNCSIG$viij (func (param i32 i32 i64)))
 (type $FUNCSIG$vijjiiiiij (func (param i32 i64 i64 i32 i32 i32 i32 i32 i64)))
 (type $FUNCSIG$v (func))
 (type $FUNCSIG$j (func (result i64)))
 (type $FUNCSIG$vjj (func (param i64 i64)))
 (type $FUNCSIG$vj (func (param i64)))
 (type $FUNCSIG$ijjjj (func (param i64 i64 i64 i64) (result i32)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$vijii (func (param i32 i64 i32 i32)))
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$ijjjjii (func (param i64 i64 i64 i64 i32 i32) (result i32)))
 (type $FUNCSIG$i (func (result i32)))
 (import "env" "abort" (func $abort))
 (import "env" "action_data_size" (func $action_data_size (result i32)))
 (import "env" "current_receiver" (func $current_receiver (result i64)))
 (import "env" "current_time" (func $current_time (result i64)))
 (import "env" "db_find_i64" (func $db_find_i64 (param i64 i64 i64 i64) (result i32)))
 (import "env" "db_get_i64" (func $db_get_i64 (param i32 i32 i32) (result i32)))
 (import "env" "db_lowerbound_i64" (func $db_lowerbound_i64 (param i64 i64 i64 i64) (result i32)))
 (import "env" "db_next_i64" (func $db_next_i64 (param i32 i32) (result i32)))
 (import "env" "db_store_i64" (func $db_store_i64 (param i64 i64 i64 i64 i32 i32) (result i32)))
 (import "env" "db_update_i64" (func $db_update_i64 (param i32 i64 i32 i32)))
 (import "env" "eosio_assert" (func $eosio_assert (param i32 i32)))
 (import "env" "memcpy" (func $memcpy (param i32 i32 i32) (result i32)))
 (import "env" "memmove" (func $memmove (param i32 i32 i32) (result i32)))
 (import "env" "printn" (func $printn (param i64)))
 (import "env" "prints" (func $prints (param i32)))
 (import "env" "prints_l" (func $prints_l (param i32 i32)))
 (import "env" "printui" (func $printui (param i64)))
 (import "env" "read_action_data" (func $read_action_data (param i32 i32) (result i32)))
 (import "env" "require_auth" (func $require_auth (param i64)))
 (import "env" "require_auth2" (func $require_auth2 (param i64 i64)))
 (import "env" "send_inline" (func $send_inline (param i32 i32)))
 (table 11 11 anyfunc)
 (elem (i32.const 0) $__wasm_nullptr $_ZN4repo6actingEyyy $_ZN4repo4infoEh $_ZN4repo12refreshusersEy $_ZN4repo7getcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy $_ZN4repo7shitoutEh $_ZN4repo8userinfoEy $_ZN4repo6getrepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy $_ZN4repo7getroleEy $_ZN4repo10newbalanceEy $_ZN4repo6createEyyNSt3__16vectorINS0_12basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEENS5_IS7_EEEENS1_IyNS5_IyEEEESB_SB_SB_y)
 (memory $0 1)
 (data (i32.const 4) "\b0h\00\00")
 (data (i32.const 16) "master\00")
 (data (i32.const 32) "object passed to modify is not in multi_index\00")
 (data (i32.const 80) "cannot modify objects in table of another contract\00")
 (data (i32.const 144) "updater cannot change primary key when modifying an object\00")
 (data (i32.const 208) "write\00")
 (data (i32.const 224) "cannot increment end iterator\00")
 (data (i32.const 256) "error reading iterator\00")
 (data (i32.const 288) "read\00")
 (data (i32.const 320) "object passed to iterator_to is not in multi_index\00")
 (data (i32.const 384) "User: \00")
 (data (i32.const 400) " Points: \00")
 (data (i32.const 416) " Tokens_owed: \00")
 (data (i32.const 432) " Star: \00")
 (data (i32.const 448) "repo newbalance !\00")
 (data (i32.const 480) "cannot pass end iterator to modify\00")
 (data (i32.const 528) "active\00")
 (data (i32.const 544) "preprocess\00")
 (data (i32.const 560) "role does not exist on this contract!\00")
 (data (i32.const 608) "role already exists on this contract!\00")
 (data (i32.const 656) "get\00")
 (data (i32.const 672) "A zero threshold role was not specified!\00")
 (data (i32.const 720) "Declared thresholds are not unique!\00")
 (data (i32.const 768) "Declared compensations are over bounds (0 - 10000)\00")
 (data (i32.const 832) "Too many roles! Maximum is currently 20\00")
 (data (i32.const 880) "cannot create objects in table of another contract\00")
 (data (i32.const 944) "# of role names does not match role_count\00")
 (data (i32.const 992) "# of actions does not match role_count\00")
 (data (i32.const 1040) "# of compensations does not match role_count\00")
 (data (i32.const 1088) "# of reputations does not match role_count\00")
 (data (i32.const 1136) "# of thresholds does not match role_count\00")
 (data (i32.const 1184) "unable to find key\00")
 (data (i32.const 1216) "For role \00")
 (data (i32.const 1232) " and action \00")
 (data (i32.const 1248) ", compensation = \00")
 (data (i32.const 1280) ", reputation = \00")
 (data (i32.const 1296) "The role is forbidden from taking this action!\00")
 (data (i32.const 1344) "Fatal: an update made to this contract erased the default role\00")
 (data (i32.const 1408) "The given user does not exist in the repo!\00")
 (data (i32.const 1456) "* \00")
 (data (i32.const 1472) "\'s\00")
 (data (i32.const 1488) " role is \00")
 (data (i32.const 1504) "\nsrole: \00")
 (data (i32.const 1520) "\n\00")
 (data (i32.const 1536) "User already disliked this repo!\00")
 (data (i32.const 1584) "unstar\00")
 (data (i32.const 1600) "User already liked this repo!\00")
 (data (i32.const 1632) "star\00")
 (data (i32.const 1648) "actor points: \00")
 (data (i32.const 1664) "\ncomp actor: \00")
 (data (i32.const 1680) " comp recipient: \00")
 (data (i32.const 1712) "\nRunning balance PRE ACTION = \00")
 (data (i32.const 1744) "\nRunning balance AFTER ACTION = \00")
 (data (i32.const 1792) "gate\00")
 (data (i32.const 1808) "queue\00")
 (data (i32.const 1824) "onerror\00")
 (data (i32.const 1840) "eosio\00")
 (data (i32.const 1856) "onerror action\'s are only valid from the \"eosio\" system account\00")
 (data (i32.const 10320) "malloc_from_freed was designed to only be called after _heap was completely allocated\00")
 (export "memory" (memory $0))
 (export "_ZeqRK11checksum256S1_" (func $_ZeqRK11checksum256S1_))
 (export "_ZeqRK11checksum160S1_" (func $_ZeqRK11checksum160S1_))
 (export "_ZneRK11checksum160S1_" (func $_ZneRK11checksum160S1_))
 (export "now" (func $now))
 (export "_ZN5eosio12require_authERKNS_16permission_levelE" (func $_ZN5eosio12require_authERKNS_16permission_levelE))
 (export "_ZN4repo12refreshusersEy" (func $_ZN4repo12refreshusersEy))
 (export "_ZN4repo8userinfoEy" (func $_ZN4repo8userinfoEy))
 (export "_ZN4repo10newbalanceEy" (func $_ZN4repo10newbalanceEy))
 (export "_ZN4repo4infoEh" (func $_ZN4repo4infoEh))
 (export "_ZN4repo11assert_roleENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEb" (func $_ZN4repo11assert_roleENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEb))
 (export "_ZN4repo11assert_zeroENSt3__16vectorIyNS0_9allocatorIyEEEE" (func $_ZN4repo11assert_zeroENSt3__16vectorIyNS0_9allocatorIyEEEE))
 (export "_ZN4repo13assert_uniqueENSt3__16vectorIyNS0_9allocatorIyEEEE" (func $_ZN4repo13assert_uniqueENSt3__16vectorIyNS0_9allocatorIyEEEE))
 (export "_ZN4repo11assert_compENSt3__16vectorIyNS0_9allocatorIyEEEE" (func $_ZN4repo11assert_compENSt3__16vectorIyNS0_9allocatorIyEEEE))
 (export "_ZN4repo12assert_countEy" (func $_ZN4repo12assert_countEy))
 (export "_ZN4repo6createEyyNSt3__16vectorINS0_12basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEENS5_IS7_EEEENS1_IyNS5_IyEEEESB_SB_SB_y" (func $_ZN4repo6createEyyNSt3__16vectorINS0_12basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEENS5_IS7_EEEENS1_IyNS5_IyEEEESB_SB_SB_y))
 (export "_ZN4repo7shitoutEh" (func $_ZN4repo7shitoutEh))
 (export "_ZN4repo8helpcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy" (func $_ZN4repo8helpcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy))
 (export "_ZN4repo7getcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy" (func $_ZN4repo7getcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy))
 (export "_ZN4repo7helprepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy" (func $_ZN4repo7helprepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy))
 (export "_ZN4repo6getrepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy" (func $_ZN4repo6getrepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy))
 (export "_ZN4repo6canactENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy" (func $_ZN4repo6canactENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy))
 (export "_ZN4repo8findroleEy" (func $_ZN4repo8findroleEy))
 (export "_ZN4repo7getroleEy" (func $_ZN4repo7getroleEy))
 (export "_ZN4repo6actingEyyy" (func $_ZN4repo6actingEyyy))
 (export "apply" (func $apply))
 (export "malloc" (func $malloc))
 (export "free" (func $free))
 (export "memcmp" (func $memcmp))
 (export "strlen" (func $strlen))
 (func $_ZeqRK11checksum256S1_ (param $0 i32) (param $1 i32) (result i32)
  (i32.eqz
   (call $memcmp
    (get_local $0)
    (get_local $1)
    (i32.const 32)
   )
  )
 )
 (func $_ZeqRK11checksum160S1_ (param $0 i32) (param $1 i32) (result i32)
  (i32.eqz
   (call $memcmp
    (get_local $0)
    (get_local $1)
    (i32.const 32)
   )
  )
 )
 (func $_ZneRK11checksum160S1_ (param $0 i32) (param $1 i32) (result i32)
  (i32.ne
   (call $memcmp
    (get_local $0)
    (get_local $1)
    (i32.const 32)
   )
   (i32.const 0)
  )
 )
 (func $now (result i32)
  (i32.wrap/i64
   (i64.div_u
    (call $current_time)
    (i64.const 1000000)
   )
  )
 )
 (func $_ZN5eosio12require_authERKNS_16permission_levelE (param $0 i32)
  (call $require_auth2
   (i64.load
    (get_local $0)
   )
   (i64.load offset=8
    (get_local $0)
   )
  )
 )
 (func $_ZN4repo12refreshusersEy (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (local $10 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 80)
    )
   )
  )
  (set_local $6
   (i64.const 0)
  )
  (set_local $5
   (i64.const 59)
  )
  (set_local $9
   (i32.const 16)
  )
  (set_local $7
   (i64.const 0)
  )
  (loop $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (br_if $label$5
         (i64.gt_u
          (get_local $6)
          (i64.const 5)
         )
        )
        (br_if $label$4
         (i32.gt_u
          (i32.and
           (i32.add
            (tee_local $2
             (i32.load8_s
              (get_local $9)
             )
            )
            (i32.const -97)
           )
           (i32.const 255)
          )
          (i32.const 25)
         )
        )
        (set_local $2
         (i32.add
          (get_local $2)
          (i32.const 165)
         )
        )
        (br $label$3)
       )
       (set_local $8
        (i64.const 0)
       )
       (br_if $label$2
        (i64.le_u
         (get_local $6)
         (i64.const 11)
        )
       )
       (br $label$1)
      )
      (set_local $2
       (select
        (i32.add
         (get_local $2)
         (i32.const 208)
        )
        (i32.const 0)
        (i32.lt_u
         (i32.and
          (i32.add
           (get_local $2)
           (i32.const -49)
          )
          (i32.const 255)
         )
         (i32.const 5)
        )
       )
      )
     )
     (set_local $8
      (i64.shr_s
       (i64.shl
        (i64.extend_u/i32
         (get_local $2)
        )
        (i64.const 56)
       )
       (i64.const 56)
      )
     )
    )
    (set_local $8
     (i64.shl
      (i64.and
       (get_local $8)
       (i64.const 31)
      )
      (i64.and
       (get_local $5)
       (i64.const 4294967295)
      )
     )
    )
   )
   (set_local $9
    (i32.add
     (get_local $9)
     (i32.const 1)
    )
   )
   (set_local $6
    (i64.add
     (get_local $6)
     (i64.const 1)
    )
   )
   (set_local $7
    (i64.or
     (get_local $8)
     (get_local $7)
    )
   )
   (br_if $label$0
    (i64.ne
     (tee_local $5
      (i64.add
       (get_local $5)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (call $require_auth
   (get_local $7)
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $10)
     (i32.const 8)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $10)
   (i64.const -1)
  )
  (i64.store offset=8
   (get_local $10)
   (tee_local $6
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $10)
   (get_local $6)
  )
  (i64.store offset=32
   (get_local $10)
   (i64.const 0)
  )
  (block $label$6
   (br_if $label$6
    (i32.lt_s
     (tee_local $9
      (call $db_lowerbound_i64
       (get_local $6)
       (get_local $6)
       (i64.const -4995709579134965888)
       (i64.const 0)
      )
     )
     (i32.const 0)
    )
   )
   (set_local $0
    (i32.add
     (i32.add
      (get_local $10)
      (i32.const 48)
     )
     (i32.const 24)
    )
   )
   (set_local $4
    (i32.add
     (i32.add
      (get_local $10)
      (i32.const 48)
     )
     (i32.const 16)
    )
   )
   (set_local $3
    (i32.or
     (i32.add
      (get_local $10)
      (i32.const 48)
     )
     (i32.const 8)
    )
   )
   (set_local $9
    (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
     (i32.add
      (get_local $10)
      (i32.const 8)
     )
     (get_local $9)
    )
   )
   (loop $label$7
    (call $eosio_assert
     (i32.eq
      (i32.load offset=32
       (get_local $9)
      )
      (i32.add
       (get_local $10)
       (i32.const 8)
      )
     )
     (i32.const 32)
    )
    (call $eosio_assert
     (i64.eq
      (i64.load offset=8
       (get_local $10)
      )
      (call $current_receiver)
     )
     (i32.const 80)
    )
    (i64.store offset=16
     (get_local $9)
     (i64.const 0)
    )
    (set_local $6
     (i64.load
      (get_local $9)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 144)
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (get_local $10)
       (i32.const 48)
      )
      (get_local $9)
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (get_local $3)
      (i32.add
       (get_local $9)
       (i32.const 8)
      )
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (get_local $4)
      (i32.add
       (get_local $9)
       (i32.const 16)
      )
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (get_local $0)
      (i32.add
       (get_local $9)
       (i32.const 24)
      )
      (i32.const 8)
     )
    )
    (call $db_update_i64
     (i32.load offset=36
      (get_local $9)
     )
     (i64.const 0)
     (i32.add
      (get_local $10)
      (i32.const 48)
     )
     (i32.const 32)
    )
    (block $label$8
     (br_if $label$8
      (i64.lt_u
       (get_local $6)
       (i64.load
        (tee_local $2
         (i32.add
          (i32.add
           (get_local $10)
           (i32.const 8)
          )
          (i32.const 16)
         )
        )
       )
      )
     )
     (i64.store
      (get_local $2)
      (select
       (i64.const -2)
       (i64.add
        (get_local $6)
        (i64.const 1)
       )
       (i64.gt_u
        (get_local $6)
        (i64.const -3)
       )
      )
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 224)
    )
    (br_if $label$6
     (i32.le_s
      (tee_local $9
       (call $db_next_i64
        (i32.load
         (i32.add
          (get_local $9)
          (i32.const 36)
         )
        )
        (i32.add
         (get_local $10)
         (i32.const 48)
        )
       )
      )
      (i32.const -1)
     )
    )
    (set_local $9
     (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
      (i32.add
       (get_local $10)
       (i32.const 8)
      )
      (get_local $9)
     )
    )
    (br $label$7)
   )
  )
  (block $label$9
   (br_if $label$9
    (i32.eqz
     (tee_local $0
      (i32.load offset=32
       (get_local $10)
      )
     )
    )
   )
   (block $label$10
    (block $label$11
     (br_if $label$11
      (i32.eq
       (tee_local $9
        (i32.load
         (tee_local $4
          (i32.add
           (get_local $10)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $0)
      )
     )
     (loop $label$12
      (set_local $2
       (i32.load
        (tee_local $9
         (i32.add
          (get_local $9)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $9)
       (i32.const 0)
      )
      (block $label$13
       (br_if $label$13
        (i32.eqz
         (get_local $2)
        )
       )
       (call $_ZdlPv
        (get_local $2)
       )
      )
      (br_if $label$12
       (i32.ne
        (get_local $0)
        (get_local $9)
       )
      )
     )
     (set_local $9
      (i32.load
       (i32.add
        (get_local $10)
        (i32.const 32)
       )
      )
     )
     (br $label$10)
    )
    (set_local $9
     (get_local $0)
    )
   )
   (i32.store
    (get_local $4)
    (get_local $0)
   )
   (call $_ZdlPv
    (get_local $9)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 80)
   )
  )
 )
 (func $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (set_local $8
   (tee_local $9
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $9)
  )
  (block $label$0
   (br_if $label$0
    (i32.eq
     (tee_local $7
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 28)
       )
      )
     )
     (tee_local $2
      (i32.load offset=24
       (get_local $0)
      )
     )
    )
   )
   (set_local $3
    (i32.sub
     (i32.const 0)
     (get_local $2)
    )
   )
   (set_local $6
    (i32.add
     (get_local $7)
     (i32.const -24)
    )
   )
   (loop $label$1
    (br_if $label$0
     (i32.eq
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 16)
       )
      )
      (get_local $1)
     )
    )
    (set_local $7
     (get_local $6)
    )
    (set_local $6
     (tee_local $4
      (i32.add
       (get_local $6)
       (i32.const -24)
      )
     )
    )
    (br_if $label$1
     (i32.ne
      (i32.add
       (get_local $4)
       (get_local $3)
      )
      (i32.const -24)
     )
    )
   )
  )
  (block $label$2
   (block $label$3
    (br_if $label$3
     (i32.eq
      (get_local $7)
      (get_local $2)
     )
    )
    (set_local $6
     (i32.load
      (i32.add
       (get_local $7)
       (i32.const -24)
      )
     )
    )
    (br $label$2)
   )
   (call $eosio_assert
    (i32.xor
     (i32.shr_u
      (tee_local $6
       (call $db_get_i64
        (get_local $1)
        (i32.const 0)
        (i32.const 0)
       )
      )
      (i32.const 31)
     )
     (i32.const 1)
    )
    (i32.const 256)
   )
   (block $label$4
    (block $label$5
     (br_if $label$5
      (i32.lt_u
       (get_local $6)
       (i32.const 513)
      )
     )
     (set_local $4
      (call $malloc
       (get_local $6)
      )
     )
     (br $label$4)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $4
      (i32.sub
       (get_local $9)
       (i32.and
        (i32.add
         (get_local $6)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $db_get_i64
     (get_local $1)
     (get_local $4)
     (get_local $6)
    )
   )
   (i32.store offset=36
    (get_local $8)
    (get_local $4)
   )
   (i32.store offset=32
    (get_local $8)
    (get_local $4)
   )
   (i32.store offset=40
    (get_local $8)
    (i32.add
     (get_local $4)
     (get_local $6)
    )
   )
   (block $label$6
    (br_if $label$6
     (i32.lt_u
      (get_local $6)
      (i32.const 513)
     )
    )
    (call $free
     (get_local $4)
    )
   )
   (i32.store offset=32
    (tee_local $6
     (call $_Znwj
      (i32.const 48)
     )
    )
    (get_local $0)
   )
   (drop
    (call $_ZrsIN5eosio10datastreamIPKcEEERT_S6_RN4repo11reputationsE
     (i32.add
      (get_local $8)
      (i32.const 32)
     )
     (get_local $6)
    )
   )
   (i32.store offset=36
    (get_local $6)
    (get_local $1)
   )
   (i32.store offset=24
    (get_local $8)
    (get_local $6)
   )
   (i64.store offset=16
    (get_local $8)
    (tee_local $5
     (i64.load
      (get_local $6)
     )
    )
   )
   (i32.store offset=12
    (get_local $8)
    (tee_local $7
     (i32.load offset=36
      (get_local $6)
     )
    )
   )
   (block $label$7
    (block $label$8
     (br_if $label$8
      (i32.ge_u
       (tee_local $4
        (i32.load
         (tee_local $1
          (i32.add
           (get_local $0)
           (i32.const 28)
          )
         )
        )
       )
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 32)
        )
       )
      )
     )
     (i64.store offset=8
      (get_local $4)
      (get_local $5)
     )
     (i32.store offset=16
      (get_local $4)
      (get_local $7)
     )
     (i32.store offset=24
      (get_local $8)
      (i32.const 0)
     )
     (i32.store
      (get_local $4)
      (get_local $6)
     )
     (i32.store
      (get_local $1)
      (i32.add
       (get_local $4)
       (i32.const 24)
      )
     )
     (br $label$7)
    )
    (call $_ZNSt3__16vectorIN5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
     (i32.add
      (get_local $0)
      (i32.const 24)
     )
     (i32.add
      (get_local $8)
      (i32.const 24)
     )
     (i32.add
      (get_local $8)
      (i32.const 16)
     )
     (i32.add
      (get_local $8)
      (i32.const 12)
     )
    )
   )
   (set_local $4
    (i32.load offset=24
     (get_local $8)
    )
   )
   (i32.store offset=24
    (get_local $8)
    (i32.const 0)
   )
   (br_if $label$2
    (i32.eqz
     (get_local $4)
    )
   )
   (call $_ZdlPv
    (get_local $4)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 48)
   )
  )
  (get_local $6)
 )
 (func $_ZrsIN5eosio10datastreamIPKcEEERT_S6_RN4repo11reputationsE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (i32.load offset=4
      (get_local $0)
     )
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (get_local $1)
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 16)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 24)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (i32.add
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (get_local $0)
 )
 (func $_ZNSt3__16vectorIN5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_ (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.ge_u
      (tee_local $5
       (i32.add
        (tee_local $4
         (i32.div_s
          (i32.sub
           (i32.load offset=4
            (get_local $0)
           )
           (tee_local $6
            (i32.load
             (get_local $0)
            )
           )
          )
          (i32.const 24)
         )
        )
        (i32.const 1)
       )
      )
      (i32.const 178956971)
     )
    )
    (set_local $7
     (i32.const 178956970)
    )
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.gt_u
        (tee_local $6
         (i32.div_s
          (i32.sub
           (i32.load offset=8
            (get_local $0)
           )
           (get_local $6)
          )
          (i32.const 24)
         )
        )
        (i32.const 89478484)
       )
      )
      (br_if $label$2
       (i32.eqz
        (tee_local $7
         (select
          (get_local $5)
          (tee_local $7
           (i32.shl
            (get_local $6)
            (i32.const 1)
           )
          )
          (i32.lt_u
           (get_local $7)
           (get_local $5)
          )
         )
        )
       )
      )
     )
     (set_local $6
      (call $_Znwj
       (i32.mul
        (get_local $7)
        (i32.const 24)
       )
      )
     )
     (br $label$0)
    )
    (set_local $7
     (i32.const 0)
    )
    (set_local $6
     (i32.const 0)
    )
    (br $label$0)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (get_local $0)
   )
   (unreachable)
  )
  (set_local $5
   (i32.load
    (get_local $1)
   )
  )
  (i32.store
   (get_local $1)
   (i32.const 0)
  )
  (i32.store
   (tee_local $1
    (i32.add
     (get_local $6)
     (i32.mul
      (get_local $4)
      (i32.const 24)
     )
    )
   )
   (get_local $5)
  )
  (i64.store offset=8
   (get_local $1)
   (i64.load
    (get_local $2)
   )
  )
  (i32.store offset=16
   (get_local $1)
   (i32.load
    (get_local $3)
   )
  )
  (set_local $4
   (i32.add
    (get_local $6)
    (i32.mul
     (get_local $7)
     (i32.const 24)
    )
   )
  )
  (set_local $5
   (i32.add
    (get_local $1)
    (i32.const 24)
   )
  )
  (block $label$4
   (block $label$5
    (br_if $label$5
     (i32.eq
      (tee_local $6
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
      )
      (tee_local $7
       (i32.load
        (get_local $0)
       )
      )
     )
    )
    (loop $label$6
     (set_local $3
      (i32.load
       (tee_local $2
        (i32.add
         (get_local $6)
         (i32.const -24)
        )
       )
      )
     )
     (i32.store
      (get_local $2)
      (i32.const 0)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -24)
      )
      (get_local $3)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -8)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -8)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -12)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -12)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -16)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -16)
       )
      )
     )
     (set_local $1
      (i32.add
       (get_local $1)
       (i32.const -24)
      )
     )
     (set_local $6
      (get_local $2)
     )
     (br_if $label$6
      (i32.ne
       (get_local $7)
       (get_local $2)
      )
     )
    )
    (set_local $7
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $6
     (i32.load
      (get_local $0)
     )
    )
    (br $label$4)
   )
   (set_local $6
    (get_local $7)
   )
  )
  (i32.store
   (get_local $0)
   (get_local $1)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (get_local $5)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (get_local $4)
  )
  (block $label$7
   (br_if $label$7
    (i32.eq
     (get_local $7)
     (get_local $6)
    )
   )
   (loop $label$8
    (set_local $1
     (i32.load
      (tee_local $7
       (i32.add
        (get_local $7)
        (i32.const -24)
       )
      )
     )
    )
    (i32.store
     (get_local $7)
     (i32.const 0)
    )
    (block $label$9
     (br_if $label$9
      (i32.eqz
       (get_local $1)
      )
     )
     (call $_ZdlPv
      (get_local $1)
     )
    )
    (br_if $label$8
     (i32.ne
      (get_local $6)
      (get_local $7)
     )
    )
   )
  )
  (block $label$10
   (br_if $label$10
    (i32.eqz
     (get_local $6)
    )
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
 )
 (func $_ZN4repo8userinfoEy (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i64)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (call $prints
   (i32.const 304)
  )
  (i32.store
   (i32.add
    (get_local $7)
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=16
   (get_local $7)
   (i64.const -1)
  )
  (i64.store offset=24
   (get_local $7)
   (i64.const 0)
  )
  (i64.store
   (get_local $7)
   (tee_local $5
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=8
   (get_local $7)
   (get_local $5)
  )
  (set_local $6
   (get_local $5)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $0
      (call $db_find_i64
       (get_local $5)
       (get_local $5)
       (i64.const -4995709579134965888)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=32
      (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
       (get_local $7)
       (get_local $0)
      )
     )
     (get_local $7)
    )
    (i32.const 320)
   )
   (set_local $5
    (i64.load
     (i32.add
      (get_local $7)
      (i32.const 8)
     )
    )
   )
   (set_local $6
    (i64.load
     (get_local $7)
    )
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.lt_s
     (tee_local $0
      (call $db_lowerbound_i64
       (get_local $6)
       (get_local $5)
       (i64.const -4995709579134965888)
       (i64.const 0)
      )
     )
     (i32.const 0)
    )
   )
   (set_local $0
    (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
     (get_local $7)
     (get_local $0)
    )
   )
   (loop $label$2
    (call $prints
     (i32.const 384)
    )
    (call $printui
     (i64.load
      (get_local $0)
     )
    )
    (call $prints
     (i32.const 400)
    )
    (call $printui
     (i64.load offset=8
      (get_local $0)
     )
    )
    (call $prints
     (i32.const 416)
    )
    (call $printui
     (i64.load offset=16
      (get_local $0)
     )
    )
    (call $prints
     (i32.const 432)
    )
    (call $printui
     (i64.load offset=24
      (get_local $0)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 224)
    )
    (br_if $label$1
     (i32.le_s
      (tee_local $0
       (call $db_next_i64
        (i32.load offset=36
         (get_local $0)
        )
        (i32.add
         (get_local $7)
         (i32.const 40)
        )
       )
      )
      (i32.const -1)
     )
    )
    (set_local $0
     (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
      (get_local $7)
      (get_local $0)
     )
    )
    (br $label$2)
   )
  )
  (block $label$3
   (br_if $label$3
    (i32.eqz
     (tee_local $2
      (i32.load offset=24
       (get_local $7)
      )
     )
    )
   )
   (block $label$4
    (block $label$5
     (br_if $label$5
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $4
          (i32.add
           (get_local $7)
           (i32.const 28)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$6
      (set_local $3
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$7
       (br_if $label$7
        (i32.eqz
         (get_local $3)
        )
       )
       (call $_ZdlPv
        (get_local $3)
       )
      )
      (br_if $label$6
       (i32.ne
        (get_local $2)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $7)
        (i32.const 24)
       )
      )
     )
     (br $label$4)
    )
    (set_local $0
     (get_local $2)
    )
   )
   (i32.store
    (get_local $4)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $7)
    (i32.const 48)
   )
  )
 )
 (func $_ZN4repo10newbalanceEy (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $9
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 80)
    )
   )
  )
  (set_local $6
   (i64.const 0)
  )
  (set_local $5
   (i64.const 59)
  )
  (set_local $4
   (i32.const 16)
  )
  (set_local $7
   (i64.const 0)
  )
  (loop $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (br_if $label$5
         (i64.gt_u
          (get_local $6)
          (i64.const 5)
         )
        )
        (br_if $label$4
         (i32.gt_u
          (i32.and
           (i32.add
            (tee_local $2
             (i32.load8_s
              (get_local $4)
             )
            )
            (i32.const -97)
           )
           (i32.const 255)
          )
          (i32.const 25)
         )
        )
        (set_local $2
         (i32.add
          (get_local $2)
          (i32.const 165)
         )
        )
        (br $label$3)
       )
       (set_local $8
        (i64.const 0)
       )
       (br_if $label$2
        (i64.le_u
         (get_local $6)
         (i64.const 11)
        )
       )
       (br $label$1)
      )
      (set_local $2
       (select
        (i32.add
         (get_local $2)
         (i32.const 208)
        )
        (i32.const 0)
        (i32.lt_u
         (i32.and
          (i32.add
           (get_local $2)
           (i32.const -49)
          )
          (i32.const 255)
         )
         (i32.const 5)
        )
       )
      )
     )
     (set_local $8
      (i64.shr_s
       (i64.shl
        (i64.extend_u/i32
         (get_local $2)
        )
        (i64.const 56)
       )
       (i64.const 56)
      )
     )
    )
    (set_local $8
     (i64.shl
      (i64.and
       (get_local $8)
       (i64.const 31)
      )
      (i64.and
       (get_local $5)
       (i64.const 4294967295)
      )
     )
    )
   )
   (set_local $4
    (i32.add
     (get_local $4)
     (i32.const 1)
    )
   )
   (set_local $6
    (i64.add
     (get_local $6)
     (i64.const 1)
    )
   )
   (set_local $7
    (i64.or
     (get_local $8)
     (get_local $7)
    )
   )
   (br_if $label$0
    (i64.ne
     (tee_local $5
      (i64.add
       (get_local $5)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (call $require_auth
   (get_local $7)
  )
  (call $prints
   (i32.const 448)
  )
  (i32.store
   (i32.add
    (get_local $9)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $9)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $9)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $9)
   (tee_local $6
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $9)
   (get_local $6)
  )
  (set_local $4
   (i32.const 0)
  )
  (block $label$6
   (br_if $label$6
    (i32.lt_s
     (tee_local $2
      (call $db_find_i64
       (get_local $6)
       (get_local $6)
       (i64.const -7876113394178195456)
       (get_local $6)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=32
      (tee_local $4
       (call $_ZNK5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $9)
         (i32.const 8)
        )
        (get_local $2)
       )
      )
     )
     (i32.add
      (get_local $9)
      (i32.const 8)
     )
    )
    (i32.const 320)
   )
  )
  (call $eosio_assert
   (i32.ne
    (get_local $4)
    (i32.const 0)
   )
   (i32.const 480)
  )
  (call $eosio_assert
   (i32.eq
    (i32.load offset=32
     (get_local $4)
    )
    (i32.add
     (get_local $9)
     (i32.const 8)
    )
   )
   (i32.const 32)
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=8
     (get_local $9)
    )
    (call $current_receiver)
   )
   (i32.const 80)
  )
  (i64.store offset=8
   (get_local $4)
   (i64.add
    (i64.load offset=8
     (get_local $4)
    )
    (get_local $1)
   )
  )
  (set_local $6
   (i64.load
    (get_local $4)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 144)
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $9)
     (i32.const 48)
    )
    (get_local $4)
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.or
     (i32.add
      (get_local $9)
      (i32.const 48)
     )
     (i32.const 8)
    )
    (i32.add
     (get_local $4)
     (i32.const 8)
    )
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.add
     (i32.add
      (get_local $9)
      (i32.const 48)
     )
     (i32.const 16)
    )
    (i32.add
     (get_local $4)
     (i32.const 16)
    )
    (i32.const 1)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $9)
     (i32.const 65)
    )
    (i32.add
     (get_local $4)
     (i32.const 24)
    )
    (i32.const 8)
   )
  )
  (call $db_update_i64
   (i32.load offset=36
    (get_local $4)
   )
   (i64.const 0)
   (i32.add
    (get_local $9)
    (i32.const 48)
   )
   (i32.const 25)
  )
  (block $label$7
   (br_if $label$7
    (i64.lt_u
     (get_local $6)
     (i64.load
      (tee_local $4
       (i32.add
        (i32.add
         (get_local $9)
         (i32.const 8)
        )
        (i32.const 16)
       )
      )
     )
    )
   )
   (i64.store
    (get_local $4)
    (select
     (i64.const -2)
     (i64.add
      (get_local $6)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $6)
      (i64.const -3)
     )
    )
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.eqz
     (tee_local $0
      (i32.load offset=32
       (get_local $9)
      )
     )
    )
   )
   (block $label$9
    (block $label$10
     (br_if $label$10
      (i32.eq
       (tee_local $4
        (i32.load
         (tee_local $3
          (i32.add
           (get_local $9)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $0)
      )
     )
     (loop $label$11
      (set_local $2
       (i32.load
        (tee_local $4
         (i32.add
          (get_local $4)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $4)
       (i32.const 0)
      )
      (block $label$12
       (br_if $label$12
        (i32.eqz
         (get_local $2)
        )
       )
       (call $_ZdlPv
        (get_local $2)
       )
      )
      (br_if $label$11
       (i32.ne
        (get_local $0)
        (get_local $4)
       )
      )
     )
     (set_local $4
      (i32.load
       (i32.add
        (get_local $9)
        (i32.const 32)
       )
      )
     )
     (br $label$9)
    )
    (set_local $4
     (get_local $0)
    )
   )
   (i32.store
    (get_local $3)
    (get_local $0)
   )
   (call $_ZdlPv
    (get_local $4)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $9)
    (i32.const 80)
   )
  )
 )
 (func $_ZNK5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE31load_object_by_primary_iteratorEl (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (set_local $8
   (tee_local $9
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $9)
  )
  (block $label$0
   (br_if $label$0
    (i32.eq
     (tee_local $7
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 28)
       )
      )
     )
     (tee_local $2
      (i32.load offset=24
       (get_local $0)
      )
     )
    )
   )
   (set_local $3
    (i32.sub
     (i32.const 0)
     (get_local $2)
    )
   )
   (set_local $6
    (i32.add
     (get_local $7)
     (i32.const -24)
    )
   )
   (loop $label$1
    (br_if $label$0
     (i32.eq
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 16)
       )
      )
      (get_local $1)
     )
    )
    (set_local $7
     (get_local $6)
    )
    (set_local $6
     (tee_local $4
      (i32.add
       (get_local $6)
       (i32.const -24)
      )
     )
    )
    (br_if $label$1
     (i32.ne
      (i32.add
       (get_local $4)
       (get_local $3)
      )
      (i32.const -24)
     )
    )
   )
  )
  (block $label$2
   (block $label$3
    (br_if $label$3
     (i32.eq
      (get_local $7)
      (get_local $2)
     )
    )
    (set_local $6
     (i32.load
      (i32.add
       (get_local $7)
       (i32.const -24)
      )
     )
    )
    (br $label$2)
   )
   (call $eosio_assert
    (i32.xor
     (i32.shr_u
      (tee_local $6
       (call $db_get_i64
        (get_local $1)
        (i32.const 0)
        (i32.const 0)
       )
      )
      (i32.const 31)
     )
     (i32.const 1)
    )
    (i32.const 256)
   )
   (block $label$4
    (block $label$5
     (br_if $label$5
      (i32.lt_u
       (get_local $6)
       (i32.const 513)
      )
     )
     (set_local $4
      (call $malloc
       (get_local $6)
      )
     )
     (br $label$4)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $4
      (i32.sub
       (get_local $9)
       (i32.and
        (i32.add
         (get_local $6)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $db_get_i64
     (get_local $1)
     (get_local $4)
     (get_local $6)
    )
   )
   (i32.store offset=36
    (get_local $8)
    (get_local $4)
   )
   (i32.store offset=32
    (get_local $8)
    (get_local $4)
   )
   (i32.store offset=40
    (get_local $8)
    (i32.add
     (get_local $4)
     (get_local $6)
    )
   )
   (block $label$6
    (br_if $label$6
     (i32.lt_u
      (get_local $6)
      (i32.const 513)
     )
    )
    (call $free
     (get_local $4)
    )
   )
   (i32.store offset=32
    (tee_local $6
     (call $_Znwj
      (i32.const 48)
     )
    )
    (get_local $0)
   )
   (drop
    (call $_ZrsIN5eosio10datastreamIPKcEEERT_S6_RN4repo4metaE
     (i32.add
      (get_local $8)
      (i32.const 32)
     )
     (get_local $6)
    )
   )
   (i32.store offset=36
    (get_local $6)
    (get_local $1)
   )
   (i32.store offset=24
    (get_local $8)
    (get_local $6)
   )
   (i64.store offset=16
    (get_local $8)
    (tee_local $5
     (i64.load
      (get_local $6)
     )
    )
   )
   (i32.store offset=12
    (get_local $8)
    (tee_local $7
     (i32.load offset=36
      (get_local $6)
     )
    )
   )
   (block $label$7
    (block $label$8
     (br_if $label$8
      (i32.ge_u
       (tee_local $4
        (i32.load
         (tee_local $1
          (i32.add
           (get_local $0)
           (i32.const 28)
          )
         )
        )
       )
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 32)
        )
       )
      )
     )
     (i64.store offset=8
      (get_local $4)
      (get_local $5)
     )
     (i32.store offset=16
      (get_local $4)
      (get_local $7)
     )
     (i32.store offset=24
      (get_local $8)
      (i32.const 0)
     )
     (i32.store
      (get_local $4)
      (get_local $6)
     )
     (i32.store
      (get_local $1)
      (i32.add
       (get_local $4)
       (i32.const 24)
      )
     )
     (br $label$7)
    )
    (call $_ZNSt3__16vectorIN5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
     (i32.add
      (get_local $0)
      (i32.const 24)
     )
     (i32.add
      (get_local $8)
      (i32.const 24)
     )
     (i32.add
      (get_local $8)
      (i32.const 16)
     )
     (i32.add
      (get_local $8)
      (i32.const 12)
     )
    )
   )
   (set_local $4
    (i32.load offset=24
     (get_local $8)
    )
   )
   (i32.store offset=24
    (get_local $8)
    (i32.const 0)
   )
   (br_if $label$2
    (i32.eqz
     (get_local $4)
    )
   )
   (call $_ZdlPv
    (get_local $4)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 48)
   )
  )
  (get_local $6)
 )
 (func $_ZrsIN5eosio10datastreamIPKcEEERT_S6_RN4repo4metaE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (i32.load offset=4
      (get_local $0)
     )
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (get_local $1)
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.ne
    (i32.load offset=8
     (get_local $0)
    )
    (get_local $2)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 16)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 1)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 1)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 24)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (i32.add
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (get_local $0)
 )
 (func $_ZNSt3__16vectorIN5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_ (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.ge_u
      (tee_local $5
       (i32.add
        (tee_local $4
         (i32.div_s
          (i32.sub
           (i32.load offset=4
            (get_local $0)
           )
           (tee_local $6
            (i32.load
             (get_local $0)
            )
           )
          )
          (i32.const 24)
         )
        )
        (i32.const 1)
       )
      )
      (i32.const 178956971)
     )
    )
    (set_local $7
     (i32.const 178956970)
    )
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.gt_u
        (tee_local $6
         (i32.div_s
          (i32.sub
           (i32.load offset=8
            (get_local $0)
           )
           (get_local $6)
          )
          (i32.const 24)
         )
        )
        (i32.const 89478484)
       )
      )
      (br_if $label$2
       (i32.eqz
        (tee_local $7
         (select
          (get_local $5)
          (tee_local $7
           (i32.shl
            (get_local $6)
            (i32.const 1)
           )
          )
          (i32.lt_u
           (get_local $7)
           (get_local $5)
          )
         )
        )
       )
      )
     )
     (set_local $6
      (call $_Znwj
       (i32.mul
        (get_local $7)
        (i32.const 24)
       )
      )
     )
     (br $label$0)
    )
    (set_local $7
     (i32.const 0)
    )
    (set_local $6
     (i32.const 0)
    )
    (br $label$0)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (get_local $0)
   )
   (unreachable)
  )
  (set_local $5
   (i32.load
    (get_local $1)
   )
  )
  (i32.store
   (get_local $1)
   (i32.const 0)
  )
  (i32.store
   (tee_local $1
    (i32.add
     (get_local $6)
     (i32.mul
      (get_local $4)
      (i32.const 24)
     )
    )
   )
   (get_local $5)
  )
  (i64.store offset=8
   (get_local $1)
   (i64.load
    (get_local $2)
   )
  )
  (i32.store offset=16
   (get_local $1)
   (i32.load
    (get_local $3)
   )
  )
  (set_local $4
   (i32.add
    (get_local $6)
    (i32.mul
     (get_local $7)
     (i32.const 24)
    )
   )
  )
  (set_local $5
   (i32.add
    (get_local $1)
    (i32.const 24)
   )
  )
  (block $label$4
   (block $label$5
    (br_if $label$5
     (i32.eq
      (tee_local $6
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
      )
      (tee_local $7
       (i32.load
        (get_local $0)
       )
      )
     )
    )
    (loop $label$6
     (set_local $3
      (i32.load
       (tee_local $2
        (i32.add
         (get_local $6)
         (i32.const -24)
        )
       )
      )
     )
     (i32.store
      (get_local $2)
      (i32.const 0)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -24)
      )
      (get_local $3)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -8)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -8)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -12)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -12)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -16)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -16)
       )
      )
     )
     (set_local $1
      (i32.add
       (get_local $1)
       (i32.const -24)
      )
     )
     (set_local $6
      (get_local $2)
     )
     (br_if $label$6
      (i32.ne
       (get_local $7)
       (get_local $2)
      )
     )
    )
    (set_local $7
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $6
     (i32.load
      (get_local $0)
     )
    )
    (br $label$4)
   )
   (set_local $6
    (get_local $7)
   )
  )
  (i32.store
   (get_local $0)
   (get_local $1)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (get_local $5)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (get_local $4)
  )
  (block $label$7
   (br_if $label$7
    (i32.eq
     (get_local $7)
     (get_local $6)
    )
   )
   (loop $label$8
    (set_local $1
     (i32.load
      (tee_local $7
       (i32.add
        (get_local $7)
        (i32.const -24)
       )
      )
     )
    )
    (i32.store
     (get_local $7)
     (i32.const 0)
    )
    (block $label$9
     (br_if $label$9
      (i32.eqz
       (get_local $1)
      )
     )
     (call $_ZdlPv
      (get_local $1)
     )
    )
    (br_if $label$8
     (i32.ne
      (get_local $6)
      (get_local $7)
     )
    )
   )
  )
  (block $label$10
   (br_if $label$10
    (i32.eqz
     (get_local $6)
    )
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
 )
 (func $_ZN4repo4infoEh (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i64)
  (local $13 i64)
  (local $14 i64)
  (local $15 i64)
  (local $16 i64)
  (local $17 i64)
  (local $18 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $18
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 192)
    )
   )
  )
  (set_local $13
   (i64.const 0)
  )
  (set_local $12
   (i64.const 59)
  )
  (set_local $11
   (i32.const 16)
  )
  (set_local $14
   (i64.const 0)
  )
  (loop $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (br_if $label$5
         (i64.gt_u
          (get_local $13)
          (i64.const 5)
         )
        )
        (br_if $label$4
         (i32.gt_u
          (i32.and
           (i32.add
            (tee_local $5
             (i32.load8_s
              (get_local $11)
             )
            )
            (i32.const -97)
           )
           (i32.const 255)
          )
          (i32.const 25)
         )
        )
        (set_local $5
         (i32.add
          (get_local $5)
          (i32.const 165)
         )
        )
        (br $label$3)
       )
       (set_local $15
        (i64.const 0)
       )
       (br_if $label$2
        (i64.le_u
         (get_local $13)
         (i64.const 11)
        )
       )
       (br $label$1)
      )
      (set_local $5
       (select
        (i32.add
         (get_local $5)
         (i32.const 208)
        )
        (i32.const 0)
        (i32.lt_u
         (i32.and
          (i32.add
           (get_local $5)
           (i32.const -49)
          )
          (i32.const 255)
         )
         (i32.const 5)
        )
       )
      )
     )
     (set_local $15
      (i64.shr_s
       (i64.shl
        (i64.extend_u/i32
         (get_local $5)
        )
        (i64.const 56)
       )
       (i64.const 56)
      )
     )
    )
    (set_local $15
     (i64.shl
      (i64.and
       (get_local $15)
       (i64.const 31)
      )
      (i64.and
       (get_local $12)
       (i64.const 4294967295)
      )
     )
    )
   )
   (set_local $11
    (i32.add
     (get_local $11)
     (i32.const 1)
    )
   )
   (set_local $13
    (i64.add
     (get_local $13)
     (i64.const 1)
    )
   )
   (set_local $14
    (i64.or
     (get_local $15)
     (get_local $14)
    )
   )
   (br_if $label$0
    (i64.ne
     (tee_local $12
      (i64.add
       (get_local $12)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (call $require_auth
   (get_local $14)
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $18)
     (i32.const 136)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=152
   (get_local $18)
   (i64.const -1)
  )
  (i64.store offset=160
   (get_local $18)
   (i64.const 0)
  )
  (i64.store offset=136
   (get_local $18)
   (tee_local $13
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=144
   (get_local $18)
   (get_local $13)
  )
  (set_local $11
   (i32.const 0)
  )
  (block $label$6
   (br_if $label$6
    (i32.lt_s
     (tee_local $5
      (call $db_find_i64
       (get_local $13)
       (get_local $13)
       (i64.const -7876113394178195456)
       (get_local $13)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=32
      (tee_local $11
       (call $_ZNK5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $18)
         (i32.const 136)
        )
        (get_local $5)
       )
      )
     )
     (i32.add
      (get_local $18)
      (i32.const 136)
     )
    )
    (i32.const 320)
   )
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $18)
     (i32.const 96)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=112
   (get_local $18)
   (i64.const -1)
  )
  (i64.store offset=120
   (get_local $18)
   (i64.const 0)
  )
  (i64.store offset=96
   (get_local $18)
   (tee_local $13
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=104
   (get_local $18)
   (get_local $13)
  )
  (i64.store
   (tee_local $7
    (i32.add
     (get_local $18)
     (i32.const 72)
    )
   )
   (i64.const 0)
  )
  (i64.store
   (i32.add
    (i32.add
     (get_local $18)
     (i32.const 48)
    )
    (i32.const 32)
   )
   (i64.const 0)
  )
  (i64.store offset=64
   (get_local $18)
   (i64.const 0)
  )
  (i64.store offset=48
   (get_local $18)
   (get_local $13)
  )
  (i64.store offset=56
   (get_local $18)
   (i64.load offset=24
    (get_local $11)
   )
  )
  (i64.store offset=88
   (get_local $18)
   (i64.load offset=8
    (get_local $11)
   )
  )
  (block $label$7
   (br_if $label$7
    (i32.lt_s
     (tee_local $11
      (call $db_lowerbound_i64
       (get_local $13)
       (get_local $13)
       (i64.const -4995709579134965888)
       (i64.const 0)
      )
     )
     (i32.const 0)
    )
   )
   (set_local $3
    (i32.add
     (get_local $18)
     (i32.const 76)
    )
   )
   (set_local $2
    (i32.add
     (i32.add
      (get_local $18)
      (i32.const 48)
     )
     (i32.const 16)
    )
   )
   (set_local $11
    (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
     (i32.add
      (get_local $18)
      (i32.const 96)
     )
     (get_local $11)
    )
   )
   (set_local $8
    (i32.add
     (get_local $18)
     (i32.const 68)
    )
   )
   (set_local $9
    (i32.add
     (get_local $18)
     (i32.const 84)
    )
   )
   (set_local $10
    (i32.add
     (get_local $18)
     (i32.const 80)
    )
   )
   (loop $label$8
    (block $label$9
     (block $label$10
      (br_if $label$10
       (i32.eq
        (tee_local $5
         (i32.load
          (get_local $8)
         )
        )
        (i32.load
         (get_local $7)
        )
       )
      )
      (i32.store
       (get_local $8)
       (i32.add
        (get_local $5)
        (i32.const 8)
       )
      )
      (i64.store
       (get_local $5)
       (i64.load
        (get_local $11)
       )
      )
      (br $label$9)
     )
     (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIRKyEEvOT_
      (get_local $2)
      (get_local $11)
     )
    )
    (set_local $6
     (i32.add
      (get_local $11)
      (i32.const 16)
     )
    )
    (block $label$11
     (block $label$12
      (br_if $label$12
       (i32.eq
        (tee_local $5
         (i32.load
          (get_local $10)
         )
        )
        (i32.load
         (get_local $9)
        )
       )
      )
      (i32.store
       (get_local $10)
       (i32.add
        (get_local $5)
        (i32.const 8)
       )
      )
      (i64.store
       (get_local $5)
       (i64.load
        (get_local $6)
       )
      )
      (br $label$11)
     )
     (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIRKyEEvOT_
      (get_local $3)
      (get_local $6)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 224)
    )
    (br_if $label$7
     (i32.le_s
      (tee_local $11
       (call $db_next_i64
        (i32.load offset=36
         (get_local $11)
        )
        (i32.add
         (get_local $18)
         (i32.const 8)
        )
       )
      )
      (i32.const -1)
     )
    )
    (set_local $11
     (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
      (i32.add
       (get_local $18)
       (i32.const 96)
      )
      (get_local $11)
     )
    )
    (br $label$8)
   )
  )
  (set_local $4
   (i64.load
    (get_local $0)
   )
  )
  (set_local $13
   (i64.const 0)
  )
  (set_local $12
   (i64.const 59)
  )
  (set_local $11
   (i32.const 528)
  )
  (set_local $14
   (i64.const 0)
  )
  (loop $label$13
   (block $label$14
    (block $label$15
     (block $label$16
      (block $label$17
       (block $label$18
        (br_if $label$18
         (i64.gt_u
          (get_local $13)
          (i64.const 5)
         )
        )
        (br_if $label$17
         (i32.gt_u
          (i32.and
           (i32.add
            (tee_local $5
             (i32.load8_s
              (get_local $11)
             )
            )
            (i32.const -97)
           )
           (i32.const 255)
          )
          (i32.const 25)
         )
        )
        (set_local $5
         (i32.add
          (get_local $5)
          (i32.const 165)
         )
        )
        (br $label$16)
       )
       (set_local $15
        (i64.const 0)
       )
       (br_if $label$15
        (i64.le_u
         (get_local $13)
         (i64.const 11)
        )
       )
       (br $label$14)
      )
      (set_local $5
       (select
        (i32.add
         (get_local $5)
         (i32.const 208)
        )
        (i32.const 0)
        (i32.lt_u
         (i32.and
          (i32.add
           (get_local $5)
           (i32.const -49)
          )
          (i32.const 255)
         )
         (i32.const 5)
        )
       )
      )
     )
     (set_local $15
      (i64.shr_s
       (i64.shl
        (i64.extend_u/i32
         (get_local $5)
        )
        (i64.const 56)
       )
       (i64.const 56)
      )
     )
    )
    (set_local $15
     (i64.shl
      (i64.and
       (get_local $15)
       (i64.const 31)
      )
      (i64.and
       (get_local $12)
       (i64.const 4294967295)
      )
     )
    )
   )
   (set_local $11
    (i32.add
     (get_local $11)
     (i32.const 1)
    )
   )
   (set_local $13
    (i64.add
     (get_local $13)
     (i64.const 1)
    )
   )
   (set_local $14
    (i64.or
     (get_local $15)
     (get_local $14)
    )
   )
   (br_if $label$13
    (i64.ne
     (tee_local $12
      (i64.add
       (get_local $12)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (set_local $13
   (i64.const 0)
  )
  (set_local $12
   (i64.const 59)
  )
  (set_local $11
   (i32.const 16)
  )
  (set_local $16
   (i64.const 0)
  )
  (loop $label$19
   (block $label$20
    (block $label$21
     (block $label$22
      (block $label$23
       (block $label$24
        (br_if $label$24
         (i64.gt_u
          (get_local $13)
          (i64.const 5)
         )
        )
        (br_if $label$23
         (i32.gt_u
          (i32.and
           (i32.add
            (tee_local $5
             (i32.load8_s
              (get_local $11)
             )
            )
            (i32.const -97)
           )
           (i32.const 255)
          )
          (i32.const 25)
         )
        )
        (set_local $5
         (i32.add
          (get_local $5)
          (i32.const 165)
         )
        )
        (br $label$22)
       )
       (set_local $15
        (i64.const 0)
       )
       (br_if $label$21
        (i64.le_u
         (get_local $13)
         (i64.const 11)
        )
       )
       (br $label$20)
      )
      (set_local $5
       (select
        (i32.add
         (get_local $5)
         (i32.const 208)
        )
        (i32.const 0)
        (i32.lt_u
         (i32.and
          (i32.add
           (get_local $5)
           (i32.const -49)
          )
          (i32.const 255)
         )
         (i32.const 5)
        )
       )
      )
     )
     (set_local $15
      (i64.shr_s
       (i64.shl
        (i64.extend_u/i32
         (get_local $5)
        )
        (i64.const 56)
       )
       (i64.const 56)
      )
     )
    )
    (set_local $15
     (i64.shl
      (i64.and
       (get_local $15)
       (i64.const 31)
      )
      (i64.and
       (get_local $12)
       (i64.const 4294967295)
      )
     )
    )
   )
   (set_local $11
    (i32.add
     (get_local $11)
     (i32.const 1)
    )
   )
   (set_local $13
    (i64.add
     (get_local $13)
     (i64.const 1)
    )
   )
   (set_local $16
    (i64.or
     (get_local $15)
     (get_local $16)
    )
   )
   (br_if $label$19
    (i64.ne
     (tee_local $12
      (i64.add
       (get_local $12)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (set_local $13
   (i64.const 0)
  )
  (set_local $12
   (i64.const 59)
  )
  (set_local $11
   (i32.const 544)
  )
  (set_local $17
   (i64.const 0)
  )
  (loop $label$25
   (block $label$26
    (block $label$27
     (block $label$28
      (block $label$29
       (block $label$30
        (br_if $label$30
         (i64.gt_u
          (get_local $13)
          (i64.const 9)
         )
        )
        (br_if $label$29
         (i32.gt_u
          (i32.and
           (i32.add
            (tee_local $5
             (i32.load8_s
              (get_local $11)
             )
            )
            (i32.const -97)
           )
           (i32.const 255)
          )
          (i32.const 25)
         )
        )
        (set_local $5
         (i32.add
          (get_local $5)
          (i32.const 165)
         )
        )
        (br $label$28)
       )
       (set_local $15
        (i64.const 0)
       )
       (br_if $label$27
        (i64.le_u
         (get_local $13)
         (i64.const 11)
        )
       )
       (br $label$26)
      )
      (set_local $5
       (select
        (i32.add
         (get_local $5)
         (i32.const 208)
        )
        (i32.const 0)
        (i32.lt_u
         (i32.and
          (i32.add
           (get_local $5)
           (i32.const -49)
          )
          (i32.const 255)
         )
         (i32.const 5)
        )
       )
      )
     )
     (set_local $15
      (i64.shr_s
       (i64.shl
        (i64.extend_u/i32
         (get_local $5)
        )
        (i64.const 56)
       )
       (i64.const 56)
      )
     )
    )
    (set_local $15
     (i64.shl
      (i64.and
       (get_local $15)
       (i64.const 31)
      )
      (i64.and
       (get_local $12)
       (i64.const 4294967295)
      )
     )
    )
   )
   (set_local $11
    (i32.add
     (get_local $11)
     (i32.const 1)
    )
   )
   (set_local $13
    (i64.add
     (get_local $13)
     (i64.const 1)
    )
   )
   (set_local $17
    (i64.or
     (get_local $15)
     (get_local $17)
    )
   )
   (br_if $label$25
    (i64.ne
     (tee_local $12
      (i64.add
       (get_local $12)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (i64.store offset=16
   (get_local $18)
   (get_local $17)
  )
  (i64.store offset=8
   (get_local $18)
   (get_local $16)
  )
  (i64.store
   (tee_local $11
    (call $_Znwj
     (i32.const 16)
    )
   )
   (get_local $4)
  )
  (i64.store offset=8
   (get_local $11)
   (get_local $14)
  )
  (i32.store
   (i32.add
    (get_local $18)
    (i32.const 32)
   )
   (tee_local $5
    (i32.add
     (get_local $11)
     (i32.const 16)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $18)
    (i32.const 28)
   )
   (get_local $5)
  )
  (i32.store offset=24
   (get_local $18)
   (get_local $11)
  )
  (call $_ZN5eosio4packIN4repo11process_msgEEENSt3__16vectorIcNS3_9allocatorIcEEEERKT_
   (i32.add
    (get_local $18)
    (i32.const 36)
   )
   (i32.add
    (get_local $18)
    (i32.const 48)
   )
  )
  (call $_ZN5eosio4packINS_6actionEEENSt3__16vectorIcNS2_9allocatorIcEEEERKT_
   (i32.add
    (get_local $18)
    (i32.const 176)
   )
   (i32.add
    (get_local $18)
    (i32.const 8)
   )
  )
  (call $send_inline
   (tee_local $11
    (i32.load offset=176
     (get_local $18)
    )
   )
   (i32.sub
    (i32.load offset=180
     (get_local $18)
    )
    (get_local $11)
   )
  )
  (block $label$31
   (br_if $label$31
    (i32.eqz
     (tee_local $11
      (i32.load offset=176
       (get_local $18)
      )
     )
    )
   )
   (i32.store offset=180
    (get_local $18)
    (get_local $11)
   )
   (call $_ZdlPv
    (get_local $11)
   )
  )
  (block $label$32
   (br_if $label$32
    (i32.eqz
     (tee_local $11
      (i32.load offset=36
       (get_local $18)
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $18)
     (i32.const 40)
    )
    (get_local $11)
   )
   (call $_ZdlPv
    (get_local $11)
   )
  )
  (block $label$33
   (br_if $label$33
    (i32.eqz
     (tee_local $11
      (i32.load offset=24
       (get_local $18)
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $18)
     (i32.const 28)
    )
    (get_local $11)
   )
   (call $_ZdlPv
    (get_local $11)
   )
  )
  (block $label$34
   (br_if $label$34
    (i32.eqz
     (tee_local $11
      (i32.load
       (i32.add
        (get_local $18)
        (i32.const 76)
       )
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $18)
     (i32.const 80)
    )
    (get_local $11)
   )
   (call $_ZdlPv
    (get_local $11)
   )
  )
  (block $label$35
   (br_if $label$35
    (i32.eqz
     (tee_local $11
      (i32.load
       (i32.add
        (get_local $18)
        (i32.const 64)
       )
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $18)
     (i32.const 68)
    )
    (get_local $11)
   )
   (call $_ZdlPv
    (get_local $11)
   )
  )
  (block $label$36
   (br_if $label$36
    (i32.eqz
     (tee_local $6
      (i32.load offset=120
       (get_local $18)
      )
     )
    )
   )
   (block $label$37
    (block $label$38
     (br_if $label$38
      (i32.eq
       (tee_local $11
        (i32.load
         (tee_local $8
          (i32.add
           (get_local $18)
           (i32.const 124)
          )
         )
        )
       )
       (get_local $6)
      )
     )
     (loop $label$39
      (set_local $5
       (i32.load
        (tee_local $11
         (i32.add
          (get_local $11)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $11)
       (i32.const 0)
      )
      (block $label$40
       (br_if $label$40
        (i32.eqz
         (get_local $5)
        )
       )
       (call $_ZdlPv
        (get_local $5)
       )
      )
      (br_if $label$39
       (i32.ne
        (get_local $6)
        (get_local $11)
       )
      )
     )
     (set_local $11
      (i32.load
       (i32.add
        (get_local $18)
        (i32.const 120)
       )
      )
     )
     (br $label$37)
    )
    (set_local $11
     (get_local $6)
    )
   )
   (i32.store
    (get_local $8)
    (get_local $6)
   )
   (call $_ZdlPv
    (get_local $11)
   )
  )
  (block $label$41
   (br_if $label$41
    (i32.eqz
     (tee_local $6
      (i32.load offset=160
       (get_local $18)
      )
     )
    )
   )
   (block $label$42
    (block $label$43
     (br_if $label$43
      (i32.eq
       (tee_local $11
        (i32.load
         (tee_local $8
          (i32.add
           (get_local $18)
           (i32.const 164)
          )
         )
        )
       )
       (get_local $6)
      )
     )
     (loop $label$44
      (set_local $5
       (i32.load
        (tee_local $11
         (i32.add
          (get_local $11)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $11)
       (i32.const 0)
      )
      (block $label$45
       (br_if $label$45
        (i32.eqz
         (get_local $5)
        )
       )
       (call $_ZdlPv
        (get_local $5)
       )
      )
      (br_if $label$44
       (i32.ne
        (get_local $6)
        (get_local $11)
       )
      )
     )
     (set_local $11
      (i32.load
       (i32.add
        (get_local $18)
        (i32.const 160)
       )
      )
     )
     (br $label$42)
    )
    (set_local $11
     (get_local $6)
    )
   )
   (i32.store
    (get_local $8)
    (get_local $6)
   )
   (call $_ZdlPv
    (get_local $11)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $18)
    (i32.const 192)
   )
  )
 )
 (func $_ZN5eosio4packIN4repo11process_msgEEENSt3__16vectorIcNS3_9allocatorIcEEEERKT_ (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (i32.store offset=8
   (get_local $0)
   (i32.const 0)
  )
  (i64.store align=4
   (get_local $0)
   (i64.const 0)
  )
  (set_local $5
   (i64.extend_u/i32
    (i32.shr_s
     (tee_local $4
      (i32.sub
       (tee_local $2
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 20)
         )
        )
       )
       (tee_local $3
        (i32.load offset=16
         (get_local $1)
        )
       )
      )
     )
     (i32.const 3)
    )
   )
  )
  (set_local $6
   (i32.const 16)
  )
  (loop $label$0
   (set_local $6
    (i32.add
     (get_local $6)
     (i32.const 1)
    )
   )
   (br_if $label$0
    (i64.ne
     (tee_local $5
      (i64.shr_u
       (get_local $5)
       (i64.const 7)
      )
     )
     (i64.const 0)
    )
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.eq
     (get_local $3)
     (get_local $2)
    )
   )
   (set_local $6
    (i32.add
     (i32.and
      (get_local $4)
      (i32.const -8)
     )
     (get_local $6)
    )
   )
  )
  (set_local $5
   (i64.extend_u/i32
    (i32.shr_s
     (tee_local $4
      (i32.sub
       (tee_local $2
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 32)
         )
        )
       )
       (tee_local $3
        (i32.load offset=28
         (get_local $1)
        )
       )
      )
     )
     (i32.const 3)
    )
   )
  )
  (loop $label$2
   (set_local $6
    (i32.add
     (get_local $6)
     (i32.const 1)
    )
   )
   (br_if $label$2
    (i64.ne
     (tee_local $5
      (i64.shr_u
       (get_local $5)
       (i64.const 7)
      )
     )
     (i64.const 0)
    )
   )
  )
  (block $label$3
   (br_if $label$3
    (i32.eq
     (get_local $3)
     (get_local $2)
    )
   )
   (set_local $6
    (i32.add
     (i32.and
      (get_local $4)
      (i32.const -8)
     )
     (get_local $6)
    )
   )
  )
  (block $label$4
   (block $label$5
    (br_if $label$5
     (i32.eqz
      (tee_local $6
       (i32.add
        (get_local $6)
        (i32.const 8)
       )
      )
     )
    )
    (call $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj
     (get_local $0)
     (get_local $6)
    )
    (set_local $2
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $6
     (i32.load
      (get_local $0)
     )
    )
    (br $label$4)
   )
   (set_local $2
    (i32.const 0)
   )
   (set_local $6
    (i32.const 0)
   )
  )
  (i32.store offset=4
   (get_local $7)
   (get_local $6)
  )
  (i32.store
   (get_local $7)
   (get_local $6)
  )
  (i32.store offset=8
   (get_local $7)
   (get_local $2)
  )
  (drop
   (call $_ZlsIN5eosio10datastreamIPcEEERT_S5_RKN4repo11process_msgE
    (get_local $7)
    (get_local $1)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $7)
    (i32.const 16)
   )
  )
 )
 (func $_ZN5eosio4packINS_6actionEEENSt3__16vectorIcNS2_9allocatorIcEEEERKT_ (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $8
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (i32.store offset=8
   (get_local $0)
   (i32.const 0)
  )
  (i64.store align=4
   (get_local $0)
   (i64.const 0)
  )
  (set_local $5
   (i32.const 16)
  )
  (set_local $2
   (i32.add
    (get_local $1)
    (i32.const 16)
   )
  )
  (set_local $6
   (i64.extend_u/i32
    (i32.shr_s
     (tee_local $4
      (i32.sub
       (tee_local $7
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 20)
         )
        )
       )
       (tee_local $3
        (i32.load offset=16
         (get_local $1)
        )
       )
      )
     )
     (i32.const 4)
    )
   )
  )
  (loop $label$0
   (set_local $5
    (i32.add
     (get_local $5)
     (i32.const 1)
    )
   )
   (br_if $label$0
    (i64.ne
     (tee_local $6
      (i64.shr_u
       (get_local $6)
       (i64.const 7)
      )
     )
     (i64.const 0)
    )
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.eq
     (get_local $3)
     (get_local $7)
    )
   )
   (set_local $5
    (i32.add
     (i32.and
      (get_local $4)
      (i32.const -16)
     )
     (get_local $5)
    )
   )
  )
  (set_local $5
   (i32.sub
    (i32.sub
     (tee_local $7
      (i32.load offset=28
       (get_local $1)
      )
     )
     (get_local $5)
    )
    (tee_local $3
     (i32.load
      (i32.add
       (get_local $1)
       (i32.const 32)
      )
     )
    )
   )
  )
  (set_local $4
   (i32.add
    (get_local $1)
    (i32.const 28)
   )
  )
  (set_local $6
   (i64.extend_u/i32
    (i32.sub
     (get_local $3)
     (get_local $7)
    )
   )
  )
  (loop $label$2
   (set_local $5
    (i32.add
     (get_local $5)
     (i32.const -1)
    )
   )
   (br_if $label$2
    (i64.ne
     (tee_local $6
      (i64.shr_u
       (get_local $6)
       (i64.const 7)
      )
     )
     (i64.const 0)
    )
   )
  )
  (set_local $7
   (i32.const 0)
  )
  (block $label$3
   (block $label$4
    (br_if $label$4
     (i32.eqz
      (get_local $5)
     )
    )
    (call $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj
     (get_local $0)
     (i32.sub
      (i32.const 0)
      (get_local $5)
     )
    )
    (set_local $7
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $5
     (i32.load
      (get_local $0)
     )
    )
    (br $label$3)
   )
   (set_local $5
    (i32.const 0)
   )
  )
  (i32.store
   (get_local $8)
   (get_local $5)
  )
  (i32.store offset=8
   (get_local $8)
   (get_local $7)
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (get_local $7)
     (get_local $5)
    )
    (i32.const 7)
   )
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (get_local $5)
    (get_local $1)
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (get_local $7)
     (tee_local $0
      (i32.add
       (get_local $5)
       (i32.const 8)
      )
     )
    )
    (i32.const 7)
   )
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (get_local $0)
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $8)
   (i32.add
    (get_local $5)
    (i32.const 16)
   )
  )
  (drop
   (call $_ZN5eosiolsINS_10datastreamIPcEEEERT_S5_RKNSt3__16vectorIcNS6_9allocatorIcEEEE
    (call $_ZN5eosiolsINS_10datastreamIPcEENS_16permission_levelEEERT_S6_RKNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE
     (get_local $8)
     (get_local $2)
    )
    (get_local $4)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 16)
   )
  )
 )
 (func $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIRKyEEvOT_ (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (br_if $label$2
      (i32.ge_u
       (tee_local $7
        (i32.add
         (tee_local $3
          (i32.shr_s
           (i32.sub
            (tee_local $6
             (i32.load offset=4
              (get_local $0)
             )
            )
            (tee_local $5
             (i32.load
              (get_local $0)
             )
            )
           )
           (i32.const 3)
          )
         )
         (i32.const 1)
        )
       )
       (i32.const 536870912)
      )
     )
     (set_local $4
      (i32.const 536870911)
     )
     (block $label$3
      (block $label$4
       (br_if $label$4
        (i32.gt_u
         (i32.shr_s
          (tee_local $2
           (i32.sub
            (i32.load offset=8
             (get_local $0)
            )
            (get_local $5)
           )
          )
          (i32.const 3)
         )
         (i32.const 268435454)
        )
       )
       (br_if $label$3
        (i32.eqz
         (tee_local $4
          (select
           (get_local $7)
           (tee_local $4
            (i32.shr_s
             (get_local $2)
             (i32.const 2)
            )
           )
           (i32.lt_u
            (get_local $4)
            (get_local $7)
           )
          )
         )
        )
       )
       (br_if $label$1
        (i32.ge_u
         (get_local $4)
         (i32.const 536870912)
        )
       )
      )
      (set_local $7
       (call $_Znwj
        (i32.shl
         (get_local $4)
         (i32.const 3)
        )
       )
      )
      (set_local $6
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
      )
      (set_local $5
       (i32.load
        (get_local $0)
       )
      )
      (br $label$0)
     )
     (set_local $4
      (i32.const 0)
     )
     (set_local $7
      (i32.const 0)
     )
     (br $label$0)
    )
    (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
     (get_local $0)
    )
    (unreachable)
   )
   (call $abort)
   (unreachable)
  )
  (i64.store
   (tee_local $3
    (i32.add
     (get_local $7)
     (i32.shl
      (get_local $3)
      (i32.const 3)
     )
    )
   )
   (i64.load
    (get_local $1)
   )
  )
  (set_local $1
   (i32.sub
    (get_local $3)
    (tee_local $6
     (i32.sub
      (get_local $6)
      (get_local $5)
     )
    )
   )
  )
  (set_local $4
   (i32.add
    (get_local $7)
    (i32.shl
     (get_local $4)
     (i32.const 3)
    )
   )
  )
  (set_local $7
   (i32.add
    (get_local $3)
    (i32.const 8)
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.lt_s
     (get_local $6)
     (i32.const 1)
    )
   )
   (drop
    (call $memcpy
     (get_local $1)
     (get_local $5)
     (get_local $6)
    )
   )
   (set_local $5
    (i32.load
     (get_local $0)
    )
   )
  )
  (i32.store
   (get_local $0)
   (get_local $1)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (get_local $7)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (get_local $4)
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (get_local $5)
    )
   )
   (call $_ZdlPv
    (get_local $5)
   )
  )
 )
 (func $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (br_if $label$4
        (i32.ge_u
         (i32.sub
          (tee_local $2
           (i32.load offset=8
            (get_local $0)
           )
          )
          (tee_local $6
           (i32.load offset=4
            (get_local $0)
           )
          )
         )
         (get_local $1)
        )
       )
       (br_if $label$2
        (i32.le_s
         (tee_local $4
          (i32.add
           (tee_local $3
            (i32.sub
             (get_local $6)
             (tee_local $5
              (i32.load
               (get_local $0)
              )
             )
            )
           )
           (get_local $1)
          )
         )
         (i32.const -1)
        )
       )
       (set_local $6
        (i32.const 2147483647)
       )
       (block $label$5
        (br_if $label$5
         (i32.gt_u
          (tee_local $2
           (i32.sub
            (get_local $2)
            (get_local $5)
           )
          )
          (i32.const 1073741822)
         )
        )
        (br_if $label$3
         (i32.eqz
          (tee_local $6
           (select
            (get_local $4)
            (tee_local $6
             (i32.shl
              (get_local $2)
              (i32.const 1)
             )
            )
            (i32.lt_u
             (get_local $6)
             (get_local $4)
            )
           )
          )
         )
        )
       )
       (set_local $2
        (call $_Znwj
         (get_local $6)
        )
       )
       (br $label$1)
      )
      (set_local $0
       (i32.add
        (get_local $0)
        (i32.const 4)
       )
      )
      (loop $label$6
       (i32.store8
        (get_local $6)
        (i32.const 0)
       )
       (i32.store
        (get_local $0)
        (tee_local $6
         (i32.add
          (i32.load
           (get_local $0)
          )
          (i32.const 1)
         )
        )
       )
       (br_if $label$6
        (tee_local $1
         (i32.add
          (get_local $1)
          (i32.const -1)
         )
        )
       )
       (br $label$0)
      )
     )
     (set_local $6
      (i32.const 0)
     )
     (set_local $2
      (i32.const 0)
     )
     (br $label$1)
    )
    (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
     (get_local $0)
    )
    (unreachable)
   )
   (set_local $4
    (i32.add
     (get_local $2)
     (get_local $6)
    )
   )
   (set_local $6
    (tee_local $5
     (i32.add
      (get_local $2)
      (get_local $3)
     )
    )
   )
   (loop $label$7
    (i32.store8
     (get_local $6)
     (i32.const 0)
    )
    (set_local $6
     (i32.add
      (get_local $6)
      (i32.const 1)
     )
    )
    (br_if $label$7
     (tee_local $1
      (i32.add
       (get_local $1)
       (i32.const -1)
      )
     )
    )
   )
   (set_local $5
    (i32.sub
     (get_local $5)
     (tee_local $2
      (i32.sub
       (i32.load
        (tee_local $3
         (i32.add
          (get_local $0)
          (i32.const 4)
         )
        )
       )
       (tee_local $1
        (i32.load
         (get_local $0)
        )
       )
      )
     )
    )
   )
   (block $label$8
    (br_if $label$8
     (i32.lt_s
      (get_local $2)
      (i32.const 1)
     )
    )
    (drop
     (call $memcpy
      (get_local $5)
      (get_local $1)
      (get_local $2)
     )
    )
    (set_local $1
     (i32.load
      (get_local $0)
     )
    )
   )
   (i32.store
    (get_local $0)
    (get_local $5)
   )
   (i32.store
    (get_local $3)
    (get_local $6)
   )
   (i32.store
    (i32.add
     (get_local $0)
     (i32.const 8)
    )
    (get_local $4)
   )
   (br_if $label$0
    (i32.eqz
     (get_local $1)
    )
   )
   (call $_ZdlPv
    (get_local $1)
   )
   (return)
  )
 )
 (func $_ZN5eosiolsINS_10datastreamIPcEENS_16permission_levelEEERT_S6_RKNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (set_local $4
   (i64.extend_u/i32
    (i32.shr_s
     (i32.sub
      (i32.load offset=4
       (get_local $1)
      )
      (i32.load
       (get_local $1)
      )
     )
     (i32.const 4)
    )
   )
  )
  (set_local $5
   (i32.load offset=4
    (get_local $0)
   )
  )
  (set_local $2
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
  )
  (loop $label$0
   (set_local $3
    (i32.wrap/i64
     (get_local $4)
    )
   )
   (i32.store8 offset=15
    (get_local $7)
    (i32.or
     (i32.shl
      (tee_local $6
       (i64.ne
        (tee_local $4
         (i64.shr_u
          (get_local $4)
          (i64.const 7)
         )
        )
        (i64.const 0)
       )
      )
      (i32.const 7)
     )
     (i32.and
      (get_local $3)
      (i32.const 127)
     )
    )
   )
   (call $eosio_assert
    (i32.gt_s
     (i32.sub
      (i32.load
       (get_local $2)
      )
      (get_local $5)
     )
     (i32.const 0)
    )
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.load
      (tee_local $3
       (i32.add
        (get_local $0)
        (i32.const 4)
       )
      )
     )
     (i32.add
      (get_local $7)
      (i32.const 15)
     )
     (i32.const 1)
    )
   )
   (i32.store
    (get_local $3)
    (tee_local $5
     (i32.add
      (i32.load
       (get_local $3)
      )
      (i32.const 1)
     )
    )
   )
   (br_if $label$0
    (get_local $6)
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.eq
     (tee_local $6
      (i32.load
       (get_local $1)
      )
     )
     (tee_local $1
      (i32.load
       (i32.add
        (get_local $1)
        (i32.const 4)
       )
      )
     )
    )
   )
   (set_local $3
    (i32.add
     (get_local $0)
     (i32.const 4)
    )
   )
   (loop $label$2
    (call $eosio_assert
     (i32.gt_s
      (i32.sub
       (i32.load
        (tee_local $2
         (i32.add
          (get_local $0)
          (i32.const 8)
         )
        )
       )
       (get_local $5)
      )
      (i32.const 7)
     )
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.load
       (get_local $3)
      )
      (get_local $6)
      (i32.const 8)
     )
    )
    (i32.store
     (get_local $3)
     (tee_local $5
      (i32.add
       (i32.load
        (get_local $3)
       )
       (i32.const 8)
      )
     )
    )
    (call $eosio_assert
     (i32.gt_s
      (i32.sub
       (i32.load
        (get_local $2)
       )
       (get_local $5)
      )
      (i32.const 7)
     )
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.load
       (get_local $3)
      )
      (i32.add
       (get_local $6)
       (i32.const 8)
      )
      (i32.const 8)
     )
    )
    (i32.store
     (get_local $3)
     (tee_local $5
      (i32.add
       (i32.load
        (get_local $3)
       )
       (i32.const 8)
      )
     )
    )
    (br_if $label$2
     (i32.ne
      (tee_local $6
       (i32.add
        (get_local $6)
        (i32.const 16)
       )
      )
      (get_local $1)
     )
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $7)
    (i32.const 16)
   )
  )
  (get_local $0)
 )
 (func $_ZN5eosiolsINS_10datastreamIPcEEEERT_S5_RKNSt3__16vectorIcNS6_9allocatorIcEEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i64)
  (local $8 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $8
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (set_local $7
   (i64.extend_u/i32
    (i32.sub
     (i32.load offset=4
      (get_local $1)
     )
     (i32.load
      (get_local $1)
     )
    )
   )
  )
  (set_local $6
   (i32.load offset=4
    (get_local $0)
   )
  )
  (set_local $4
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
  )
  (set_local $5
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
  )
  (loop $label$0
   (set_local $2
    (i32.wrap/i64
     (get_local $7)
    )
   )
   (i32.store8 offset=15
    (get_local $8)
    (i32.or
     (i32.shl
      (tee_local $3
       (i64.ne
        (tee_local $7
         (i64.shr_u
          (get_local $7)
          (i64.const 7)
         )
        )
        (i64.const 0)
       )
      )
      (i32.const 7)
     )
     (i32.and
      (get_local $2)
      (i32.const 127)
     )
    )
   )
   (call $eosio_assert
    (i32.gt_s
     (i32.sub
      (i32.load
       (get_local $4)
      )
      (get_local $6)
     )
     (i32.const 0)
    )
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.load
      (get_local $5)
     )
     (i32.add
      (get_local $8)
      (i32.const 15)
     )
     (i32.const 1)
    )
   )
   (i32.store
    (get_local $5)
    (tee_local $6
     (i32.add
      (i32.load
       (get_local $5)
      )
      (i32.const 1)
     )
    )
   )
   (br_if $label$0
    (get_local $3)
   )
  )
  (call $eosio_assert
   (i32.ge_s
    (i32.sub
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 8)
      )
     )
     (get_local $6)
    )
    (tee_local $5
     (i32.sub
      (i32.load
       (i32.add
        (get_local $1)
        (i32.const 4)
       )
      )
      (tee_local $2
       (i32.load
        (get_local $1)
       )
      )
     )
    )
   )
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.load
     (tee_local $6
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (get_local $2)
    (get_local $5)
   )
  )
  (i32.store
   (get_local $6)
   (i32.add
    (i32.load
     (get_local $6)
    )
    (get_local $5)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 16)
   )
  )
  (get_local $0)
 )
 (func $_ZlsIN5eosio10datastreamIPcEEERT_S5_RKN4repo11process_msgE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (i32.load offset=4
      (get_local $0)
     )
    )
    (i32.const 7)
   )
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (get_local $1)
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (i32.add
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (tee_local $0
       (call $_ZN5eosiolsINS_10datastreamIPcEEyEERT_S5_RKNSt3__16vectorIT0_NS6_9allocatorIS8_EEEE
        (call $_ZN5eosiolsINS_10datastreamIPcEEyEERT_S5_RKNSt3__16vectorIT0_NS6_9allocatorIS8_EEEE
         (get_local $0)
         (i32.add
          (get_local $1)
          (i32.const 16)
         )
        )
        (i32.add
         (get_local $1)
         (i32.const 28)
        )
       )
      )
     )
     (i32.load offset=4
      (get_local $0)
     )
    )
    (i32.const 7)
   )
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 40)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (i32.add
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (get_local $0)
 )
 (func $_ZN5eosiolsINS_10datastreamIPcEEyEERT_S5_RKNSt3__16vectorIT0_NS6_9allocatorIS8_EEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $8
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (set_local $6
   (i64.extend_u/i32
    (i32.shr_s
     (i32.sub
      (i32.load offset=4
       (get_local $1)
      )
      (i32.load
       (get_local $1)
      )
     )
     (i32.const 3)
    )
   )
  )
  (set_local $7
   (i32.load offset=4
    (get_local $0)
   )
  )
  (set_local $4
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
  )
  (set_local $5
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
  )
  (loop $label$0
   (set_local $2
    (i32.wrap/i64
     (get_local $6)
    )
   )
   (i32.store8 offset=15
    (get_local $8)
    (i32.or
     (i32.shl
      (tee_local $3
       (i64.ne
        (tee_local $6
         (i64.shr_u
          (get_local $6)
          (i64.const 7)
         )
        )
        (i64.const 0)
       )
      )
      (i32.const 7)
     )
     (i32.and
      (get_local $2)
      (i32.const 127)
     )
    )
   )
   (call $eosio_assert
    (i32.gt_s
     (i32.sub
      (i32.load
       (get_local $4)
      )
      (get_local $7)
     )
     (i32.const 0)
    )
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.load
      (get_local $5)
     )
     (i32.add
      (get_local $8)
      (i32.const 15)
     )
     (i32.const 1)
    )
   )
   (i32.store
    (get_local $5)
    (tee_local $7
     (i32.add
      (i32.load
       (get_local $5)
      )
      (i32.const 1)
     )
    )
   )
   (br_if $label$0
    (get_local $3)
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.eq
     (tee_local $5
      (i32.load
       (get_local $1)
      )
     )
     (tee_local $3
      (i32.load
       (i32.add
        (get_local $1)
        (i32.const 4)
       )
      )
     )
    )
   )
   (set_local $2
    (i32.add
     (get_local $0)
     (i32.const 4)
    )
   )
   (loop $label$2
    (call $eosio_assert
     (i32.gt_s
      (i32.sub
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 8)
        )
       )
       (get_local $7)
      )
      (i32.const 7)
     )
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.load
       (get_local $2)
      )
      (get_local $5)
      (i32.const 8)
     )
    )
    (i32.store
     (get_local $2)
     (tee_local $7
      (i32.add
       (i32.load
        (get_local $2)
       )
       (i32.const 8)
      )
     )
    )
    (br_if $label$2
     (i32.ne
      (get_local $3)
      (tee_local $5
       (i32.add
        (get_local $5)
        (i32.const 8)
       )
      )
     )
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 16)
   )
  )
  (get_local $0)
 )
 (func $_ZN4repo11assert_roleENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEb (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i64)
  (local $8 i64)
  (local $9 i64)
  (local $10 i64)
  (local $11 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $11
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.and
      (i32.load8_u
       (get_local $1)
      )
      (i32.const 1)
     )
    )
    (set_local $1
     (i32.add
      (get_local $1)
      (i32.const 1)
     )
    )
    (br $label$0)
   )
   (set_local $1
    (i32.load offset=8
     (get_local $1)
    )
   )
  )
  (set_local $6
   (i32.const -1)
  )
  (loop $label$2
   (set_local $5
    (i32.add
     (get_local $1)
     (get_local $6)
    )
   )
   (set_local $6
    (tee_local $3
     (i32.add
      (get_local $6)
      (i32.const 1)
     )
    )
   )
   (br_if $label$2
    (i32.load8_u
     (i32.add
      (get_local $5)
      (i32.const 1)
     )
    )
   )
  )
  (set_local $4
   (i64.extend_u/i32
    (get_local $3)
   )
  )
  (set_local $8
   (i64.const 0)
  )
  (set_local $7
   (i64.const 59)
  )
  (set_local $9
   (i64.const 0)
  )
  (loop $label$3
   (set_local $10
    (i64.const 0)
   )
   (block $label$4
    (br_if $label$4
     (i64.ge_u
      (get_local $8)
      (get_local $4)
     )
    )
    (block $label$5
     (block $label$6
      (br_if $label$6
       (i32.gt_u
        (i32.and
         (i32.add
          (tee_local $6
           (i32.load8_s
            (get_local $1)
           )
          )
          (i32.const -97)
         )
         (i32.const 255)
        )
        (i32.const 25)
       )
      )
      (set_local $6
       (i32.add
        (get_local $6)
        (i32.const 165)
       )
      )
      (br $label$5)
     )
     (set_local $6
      (select
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (i32.const 0)
       (i32.lt_u
        (i32.and
         (i32.add
          (get_local $6)
          (i32.const -49)
         )
         (i32.const 255)
        )
        (i32.const 5)
       )
      )
     )
    )
    (set_local $10
     (i64.shr_s
      (i64.shl
       (i64.extend_u/i32
        (get_local $6)
       )
       (i64.const 56)
      )
      (i64.const 56)
     )
    )
   )
   (block $label$7
    (block $label$8
     (br_if $label$8
      (i64.gt_u
       (get_local $8)
       (i64.const 11)
      )
     )
     (set_local $10
      (i64.shl
       (i64.and
        (get_local $10)
        (i64.const 31)
       )
       (i64.and
        (get_local $7)
        (i64.const 4294967295)
       )
      )
     )
     (br $label$7)
    )
    (set_local $10
     (i64.and
      (get_local $10)
      (i64.const 15)
     )
    )
   )
   (set_local $1
    (i32.add
     (get_local $1)
     (i32.const 1)
    )
   )
   (set_local $8
    (i64.add
     (get_local $8)
     (i64.const 1)
    )
   )
   (set_local $9
    (i64.or
     (get_local $10)
     (get_local $9)
    )
   )
   (br_if $label$3
    (i64.ne
     (tee_local $7
      (i64.add
       (get_local $7)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (set_local $1
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (get_local $11)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $11)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $11)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $11)
   (tee_local $8
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $11)
   (get_local $8)
  )
  (block $label$9
   (br_if $label$9
    (i32.lt_s
     (tee_local $6
      (call $db_find_i64
       (get_local $8)
       (get_local $8)
       (i64.const -4818099535333031936)
       (get_local $9)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=64
      (tee_local $1
       (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $11)
         (i32.const 8)
        )
        (get_local $6)
       )
      )
     )
     (i32.add
      (get_local $11)
      (i32.const 8)
     )
    )
    (i32.const 320)
   )
  )
  (block $label$10
   (block $label$11
    (br_if $label$11
     (i32.eqz
      (get_local $2)
     )
    )
    (call $eosio_assert
     (i32.ne
      (get_local $1)
      (i32.const 0)
     )
     (i32.const 560)
    )
    (br $label$10)
   )
   (call $eosio_assert
    (i32.eqz
     (get_local $1)
    )
    (i32.const 608)
   )
  )
  (drop
   (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
    (i32.add
     (get_local $11)
     (i32.const 32)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $11)
    (i32.const 48)
   )
  )
 )
 (func $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (set_local $8
   (tee_local $9
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $9)
  )
  (block $label$0
   (br_if $label$0
    (i32.eq
     (tee_local $7
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 28)
       )
      )
     )
     (tee_local $2
      (i32.load offset=24
       (get_local $0)
      )
     )
    )
   )
   (set_local $3
    (i32.sub
     (i32.const 0)
     (get_local $2)
    )
   )
   (set_local $6
    (i32.add
     (get_local $7)
     (i32.const -24)
    )
   )
   (loop $label$1
    (br_if $label$0
     (i32.eq
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 16)
       )
      )
      (get_local $1)
     )
    )
    (set_local $7
     (get_local $6)
    )
    (set_local $6
     (tee_local $4
      (i32.add
       (get_local $6)
       (i32.const -24)
      )
     )
    )
    (br_if $label$1
     (i32.ne
      (i32.add
       (get_local $4)
       (get_local $3)
      )
      (i32.const -24)
     )
    )
   )
  )
  (block $label$2
   (block $label$3
    (br_if $label$3
     (i32.eq
      (get_local $7)
      (get_local $2)
     )
    )
    (set_local $6
     (i32.load
      (i32.add
       (get_local $7)
       (i32.const -24)
      )
     )
    )
    (br $label$2)
   )
   (call $eosio_assert
    (i32.xor
     (i32.shr_u
      (tee_local $6
       (call $db_get_i64
        (get_local $1)
        (i32.const 0)
        (i32.const 0)
       )
      )
      (i32.const 31)
     )
     (i32.const 1)
    )
    (i32.const 256)
   )
   (block $label$4
    (block $label$5
     (br_if $label$5
      (i32.lt_u
       (get_local $6)
       (i32.const 513)
      )
     )
     (set_local $4
      (call $malloc
       (get_local $6)
      )
     )
     (br $label$4)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $4
      (i32.sub
       (get_local $9)
       (i32.and
        (i32.add
         (get_local $6)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $db_get_i64
     (get_local $1)
     (get_local $4)
     (get_local $6)
    )
   )
   (i32.store offset=36
    (get_local $8)
    (get_local $4)
   )
   (i32.store offset=32
    (get_local $8)
    (get_local $4)
   )
   (i32.store offset=40
    (get_local $8)
    (tee_local $7
     (i32.add
      (get_local $4)
      (get_local $6)
     )
    )
   )
   (block $label$6
    (br_if $label$6
     (i32.le_u
      (get_local $6)
      (i32.const 512)
     )
    )
    (call $free
     (get_local $4)
    )
    (set_local $7
     (i32.load
      (i32.add
       (get_local $8)
       (i32.const 40)
      )
     )
    )
    (set_local $4
     (i32.load offset=36
      (get_local $8)
     )
    )
   )
   (i64.store offset=8 align=4
    (tee_local $6
     (call $_Znwj
      (i32.const 80)
     )
    )
    (i64.const 0)
   )
   (i64.store offset=16 align=4
    (get_local $6)
    (i64.const 0)
   )
   (i64.store offset=24 align=4
    (get_local $6)
    (i64.const 0)
   )
   (i64.store offset=32 align=4
    (get_local $6)
    (i64.const 0)
   )
   (i64.store offset=40 align=4
    (get_local $6)
    (i64.const 0)
   )
   (i32.store offset=48
    (get_local $6)
    (i32.const 0)
   )
   (i32.store offset=52
    (get_local $6)
    (i32.const 0)
   )
   (i32.store offset=64
    (get_local $6)
    (get_local $0)
   )
   (call $eosio_assert
    (i32.gt_u
     (i32.sub
      (get_local $7)
      (get_local $4)
     )
     (i32.const 7)
    )
    (i32.const 288)
   )
   (drop
    (call $memcpy
     (get_local $6)
     (get_local $4)
     (i32.const 8)
    )
   )
   (i32.store offset=36
    (get_local $8)
    (i32.add
     (get_local $4)
     (i32.const 8)
    )
   )
   (call $eosio_assert
    (i32.gt_u
     (i32.sub
      (i32.load offset=8
       (tee_local $4
        (call $_ZN5eosiorsINS_10datastreamIPKcEEyEERT_S6_RNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE
         (call $_ZN5eosiorsINS_10datastreamIPKcEEyEERT_S6_RNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE
          (call $_ZN5eosiorsINS_10datastreamIPKcEEyEERT_S6_RNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE
           (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
            (i32.add
             (get_local $8)
             (i32.const 32)
            )
            (i32.add
             (get_local $6)
             (i32.const 8)
            )
           )
           (i32.add
            (get_local $6)
            (i32.const 20)
           )
          )
          (i32.add
           (get_local $6)
           (i32.const 32)
          )
         )
         (i32.add
          (get_local $6)
          (i32.const 44)
         )
        )
       )
      )
      (i32.load offset=4
       (get_local $4)
      )
     )
     (i32.const 7)
    )
    (i32.const 288)
   )
   (drop
    (call $memcpy
     (i32.add
      (get_local $6)
      (i32.const 56)
     )
     (i32.load offset=4
      (get_local $4)
     )
     (i32.const 8)
    )
   )
   (i32.store offset=68
    (get_local $6)
    (get_local $1)
   )
   (i32.store offset=4
    (get_local $4)
    (i32.add
     (i32.load offset=4
      (get_local $4)
     )
     (i32.const 8)
    )
   )
   (i32.store offset=24
    (get_local $8)
    (get_local $6)
   )
   (i64.store offset=16
    (get_local $8)
    (tee_local $5
     (i64.load
      (get_local $6)
     )
    )
   )
   (i32.store offset=12
    (get_local $8)
    (tee_local $7
     (i32.load offset=68
      (get_local $6)
     )
    )
   )
   (block $label$7
    (block $label$8
     (br_if $label$8
      (i32.ge_u
       (tee_local $4
        (i32.load
         (tee_local $1
          (i32.add
           (get_local $0)
           (i32.const 28)
          )
         )
        )
       )
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 32)
        )
       )
      )
     )
     (i64.store offset=8
      (get_local $4)
      (get_local $5)
     )
     (i32.store offset=16
      (get_local $4)
      (get_local $7)
     )
     (i32.store offset=24
      (get_local $8)
      (i32.const 0)
     )
     (i32.store
      (get_local $4)
      (get_local $6)
     )
     (i32.store
      (get_local $1)
      (i32.add
       (get_local $4)
       (i32.const 24)
      )
     )
     (br $label$7)
    )
    (call $_ZNSt3__16vectorIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
     (i32.add
      (get_local $0)
      (i32.const 24)
     )
     (i32.add
      (get_local $8)
      (i32.const 24)
     )
     (i32.add
      (get_local $8)
      (i32.const 16)
     )
     (i32.add
      (get_local $8)
      (i32.const 12)
     )
    )
   )
   (set_local $4
    (i32.load offset=24
     (get_local $8)
    )
   )
   (i32.store offset=24
    (get_local $8)
    (i32.const 0)
   )
   (br_if $label$2
    (i32.eqz
     (get_local $4)
    )
   )
   (block $label$9
    (br_if $label$9
     (i32.eqz
      (tee_local $7
       (i32.load
        (i32.add
         (get_local $4)
         (i32.const 44)
        )
       )
      )
     )
    )
    (i32.store
     (i32.add
      (get_local $4)
      (i32.const 48)
     )
     (get_local $7)
    )
    (call $_ZdlPv
     (get_local $7)
    )
   )
   (block $label$10
    (br_if $label$10
     (i32.eqz
      (tee_local $7
       (i32.load
        (i32.add
         (get_local $4)
         (i32.const 32)
        )
       )
      )
     )
    )
    (i32.store
     (i32.add
      (get_local $4)
      (i32.const 36)
     )
     (get_local $7)
    )
    (call $_ZdlPv
     (get_local $7)
    )
   )
   (block $label$11
    (br_if $label$11
     (i32.eqz
      (tee_local $7
       (i32.load
        (i32.add
         (get_local $4)
         (i32.const 20)
        )
       )
      )
     )
    )
    (i32.store
     (i32.add
      (get_local $4)
      (i32.const 24)
     )
     (get_local $7)
    )
    (call $_ZdlPv
     (get_local $7)
    )
   )
   (block $label$12
    (br_if $label$12
     (i32.eqz
      (i32.and
       (i32.load8_u
        (i32.add
         (get_local $4)
         (i32.const 8)
        )
       )
       (i32.const 1)
      )
     )
    )
    (call $_ZdlPv
     (i32.load
      (i32.add
       (get_local $4)
       (i32.const 16)
      )
     )
    )
   )
   (call $_ZdlPv
    (get_local $4)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 48)
   )
  )
  (get_local $6)
 )
 (func $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (tee_local $1
      (i32.load
       (get_local $0)
      )
     )
    )
   )
   (block $label$1
    (block $label$2
     (br_if $label$2
      (i32.eq
       (tee_local $4
        (i32.load offset=4
         (get_local $0)
        )
       )
       (get_local $1)
      )
     )
     (loop $label$3
      (set_local $2
       (i32.load
        (tee_local $4
         (i32.add
          (get_local $4)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $4)
       (i32.const 0)
      )
      (block $label$4
       (br_if $label$4
        (i32.eqz
         (get_local $2)
        )
       )
       (block $label$5
        (br_if $label$5
         (i32.eqz
          (tee_local $3
           (i32.load
            (i32.add
             (get_local $2)
             (i32.const 44)
            )
           )
          )
         )
        )
        (i32.store
         (i32.add
          (get_local $2)
          (i32.const 48)
         )
         (get_local $3)
        )
        (call $_ZdlPv
         (get_local $3)
        )
       )
       (block $label$6
        (br_if $label$6
         (i32.eqz
          (tee_local $3
           (i32.load
            (i32.add
             (get_local $2)
             (i32.const 32)
            )
           )
          )
         )
        )
        (i32.store
         (i32.add
          (get_local $2)
          (i32.const 36)
         )
         (get_local $3)
        )
        (call $_ZdlPv
         (get_local $3)
        )
       )
       (block $label$7
        (br_if $label$7
         (i32.eqz
          (tee_local $3
           (i32.load
            (i32.add
             (get_local $2)
             (i32.const 20)
            )
           )
          )
         )
        )
        (i32.store
         (i32.add
          (get_local $2)
          (i32.const 24)
         )
         (get_local $3)
        )
        (call $_ZdlPv
         (get_local $3)
        )
       )
       (block $label$8
        (br_if $label$8
         (i32.eqz
          (i32.and
           (i32.load8_u
            (i32.add
             (get_local $2)
             (i32.const 8)
            )
           )
           (i32.const 1)
          )
         )
        )
        (call $_ZdlPv
         (i32.load
          (i32.add
           (get_local $2)
           (i32.const 16)
          )
         )
        )
       )
       (call $_ZdlPv
        (get_local $2)
       )
      )
      (br_if $label$3
       (i32.ne
        (get_local $1)
        (get_local $4)
       )
      )
     )
     (set_local $2
      (i32.load
       (get_local $0)
      )
     )
     (br $label$1)
    )
    (set_local $2
     (get_local $1)
    )
   )
   (i32.store
    (i32.add
     (get_local $0)
     (i32.const 4)
    )
    (get_local $1)
   )
   (call $_ZdlPv
    (get_local $2)
   )
  )
  (get_local $0)
 )
 (func $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 32)
    )
   )
  )
  (i32.store offset=24
   (get_local $7)
   (i32.const 0)
  )
  (i64.store offset=16
   (get_local $7)
   (i64.const 0)
  )
  (drop
   (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__16vectorIcNS7_9allocatorIcEEEE
    (get_local $0)
    (i32.add
     (get_local $7)
     (i32.const 16)
    )
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (block $label$6
         (block $label$7
          (block $label$8
           (br_if $label$8
            (i32.ne
             (tee_local $5
              (i32.load offset=20
               (get_local $7)
              )
             )
             (tee_local $4
              (i32.load offset=16
               (get_local $7)
              )
             )
            )
           )
           (br_if $label$7
            (i32.and
             (i32.load8_u
              (get_local $1)
             )
             (i32.const 1)
            )
           )
           (i32.store16
            (get_local $1)
            (i32.const 0)
           )
           (set_local $4
            (i32.add
             (get_local $1)
             (i32.const 8)
            )
           )
           (br $label$6)
          )
          (i32.store
           (i32.add
            (get_local $7)
            (i32.const 8)
           )
           (i32.const 0)
          )
          (i64.store
           (get_local $7)
           (i64.const 0)
          )
          (br_if $label$0
           (i32.ge_u
            (tee_local $2
             (i32.sub
              (get_local $5)
              (get_local $4)
             )
            )
            (i32.const -16)
           )
          )
          (br_if $label$5
           (i32.ge_u
            (get_local $2)
            (i32.const 11)
           )
          )
          (i32.store8
           (get_local $7)
           (i32.shl
            (get_local $2)
            (i32.const 1)
           )
          )
          (set_local $6
           (i32.or
            (get_local $7)
            (i32.const 1)
           )
          )
          (br_if $label$4
           (get_local $2)
          )
          (br $label$3)
         )
         (i32.store8
          (i32.load offset=8
           (get_local $1)
          )
          (i32.const 0)
         )
         (i32.store offset=4
          (get_local $1)
          (i32.const 0)
         )
         (set_local $4
          (i32.add
           (get_local $1)
           (i32.const 8)
          )
         )
        )
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
         (get_local $1)
         (i32.const 0)
        )
        (i32.store
         (get_local $4)
         (i32.const 0)
        )
        (i64.store align=4
         (get_local $1)
         (i64.const 0)
        )
        (br_if $label$2
         (tee_local $4
          (i32.load offset=16
           (get_local $7)
          )
         )
        )
        (br $label$1)
       )
       (set_local $6
        (call $_Znwj
         (tee_local $5
          (i32.and
           (i32.add
            (get_local $2)
            (i32.const 16)
           )
           (i32.const -16)
          )
         )
        )
       )
       (i32.store
        (get_local $7)
        (i32.or
         (get_local $5)
         (i32.const 1)
        )
       )
       (i32.store offset=8
        (get_local $7)
        (get_local $6)
       )
       (i32.store offset=4
        (get_local $7)
        (get_local $2)
       )
      )
      (set_local $3
       (get_local $2)
      )
      (set_local $5
       (get_local $6)
      )
      (loop $label$9
       (i32.store8
        (get_local $5)
        (i32.load8_u
         (get_local $4)
        )
       )
       (set_local $5
        (i32.add
         (get_local $5)
         (i32.const 1)
        )
       )
       (set_local $4
        (i32.add
         (get_local $4)
         (i32.const 1)
        )
       )
       (br_if $label$9
        (tee_local $3
         (i32.add
          (get_local $3)
          (i32.const -1)
         )
        )
       )
      )
      (set_local $6
       (i32.add
        (get_local $6)
        (get_local $2)
       )
      )
     )
     (i32.store8
      (get_local $6)
      (i32.const 0)
     )
     (block $label$10
      (block $label$11
       (br_if $label$11
        (i32.and
         (i32.load8_u
          (get_local $1)
         )
         (i32.const 1)
        )
       )
       (i32.store16
        (get_local $1)
        (i32.const 0)
       )
       (br $label$10)
      )
      (i32.store8
       (i32.load offset=8
        (get_local $1)
       )
       (i32.const 0)
      )
      (i32.store offset=4
       (get_local $1)
       (i32.const 0)
      )
     )
     (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
      (get_local $1)
      (i32.const 0)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const 8)
      )
      (i32.load
       (i32.add
        (get_local $7)
        (i32.const 8)
       )
      )
     )
     (i64.store align=4
      (get_local $1)
      (i64.load
       (get_local $7)
      )
     )
     (br_if $label$1
      (i32.eqz
       (tee_local $4
        (i32.load offset=16
         (get_local $7)
        )
       )
      )
     )
    )
    (i32.store offset=20
     (get_local $7)
     (get_local $4)
    )
    (call $_ZdlPv
     (get_local $4)
    )
   )
   (i32.store offset=4
    (i32.const 0)
    (i32.add
     (get_local $7)
     (i32.const 32)
    )
   )
   (return
    (get_local $0)
   )
  )
  (call $_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv
   (get_local $7)
  )
  (unreachable)
 )
 (func $_ZN5eosiorsINS_10datastreamIPKcEEyEERT_S6_RNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (set_local $5
   (i32.load offset=4
    (get_local $0)
   )
  )
  (set_local $7
   (i32.const 0)
  )
  (set_local $6
   (i64.const 0)
  )
  (set_local $2
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
  )
  (set_local $3
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
  )
  (loop $label$0
   (call $eosio_assert
    (i32.lt_u
     (get_local $5)
     (i32.load
      (get_local $2)
     )
    )
    (i32.const 656)
   )
   (set_local $4
    (i32.load8_u
     (tee_local $5
      (i32.load
       (get_local $3)
      )
     )
    )
   )
   (i32.store
    (get_local $3)
    (tee_local $5
     (i32.add
      (get_local $5)
      (i32.const 1)
     )
    )
   )
   (set_local $6
    (i64.or
     (i64.extend_u/i32
      (i32.shl
       (i32.and
        (get_local $4)
        (i32.const 127)
       )
       (tee_local $7
        (i32.and
         (get_local $7)
         (i32.const 255)
        )
       )
      )
     )
     (get_local $6)
    )
   )
   (set_local $7
    (i32.add
     (get_local $7)
     (i32.const 7)
    )
   )
   (br_if $label$0
    (i32.shr_u
     (get_local $4)
     (i32.const 7)
    )
   )
  )
  (block $label$1
   (block $label$2
    (block $label$3
     (br_if $label$3
      (i32.le_u
       (tee_local $5
        (i32.wrap/i64
         (get_local $6)
        )
       )
       (tee_local $7
        (i32.shr_s
         (i32.sub
          (tee_local $3
           (i32.load offset=4
            (get_local $1)
           )
          )
          (tee_local $4
           (i32.load
            (get_local $1)
           )
          )
         )
         (i32.const 3)
        )
       )
      )
     )
     (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE8__appendEj
      (get_local $1)
      (i32.sub
       (get_local $5)
       (get_local $7)
      )
     )
     (br_if $label$2
      (i32.ne
       (tee_local $4
        (i32.load
         (get_local $1)
        )
       )
       (tee_local $3
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 4)
         )
        )
       )
      )
     )
     (br $label$1)
    )
    (block $label$4
     (br_if $label$4
      (i32.ge_u
       (get_local $5)
       (get_local $7)
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const 4)
      )
      (tee_local $3
       (i32.add
        (get_local $4)
        (i32.shl
         (get_local $5)
         (i32.const 3)
        )
       )
      )
     )
    )
    (br_if $label$1
     (i32.eq
      (get_local $4)
      (get_local $3)
     )
    )
   )
   (set_local $7
    (i32.load
     (tee_local $5
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
   )
   (loop $label$5
    (call $eosio_assert
     (i32.gt_u
      (i32.sub
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 8)
        )
       )
       (get_local $7)
      )
      (i32.const 7)
     )
     (i32.const 288)
    )
    (drop
     (call $memcpy
      (get_local $4)
      (i32.load
       (get_local $5)
      )
      (i32.const 8)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $7
      (i32.add
       (i32.load
        (get_local $5)
       )
       (i32.const 8)
      )
     )
    )
    (br_if $label$5
     (i32.ne
      (get_local $3)
      (tee_local $4
       (i32.add
        (get_local $4)
        (i32.const 8)
       )
      )
     )
    )
   )
  )
  (get_local $0)
 )
 (func $_ZNSt3__16vectorIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_ (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 32)
    )
   )
  )
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.ge_u
      (tee_local $8
       (i32.add
        (tee_local $4
         (i32.div_s
          (i32.sub
           (i32.load offset=4
            (get_local $0)
           )
           (tee_local $9
            (i32.load
             (get_local $0)
            )
           )
          )
          (i32.const 24)
         )
        )
        (i32.const 1)
       )
      )
      (i32.const 178956971)
     )
    )
    (set_local $5
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
    (block $label$2
     (block $label$3
      (block $label$4
       (br_if $label$4
        (i32.ge_u
         (tee_local $9
          (i32.div_s
           (i32.sub
            (i32.load offset=8
             (get_local $0)
            )
            (get_local $9)
           )
           (i32.const 24)
          )
         )
         (i32.const 89478485)
        )
       )
       (i32.store
        (i32.add
         (get_local $10)
         (i32.const 24)
        )
        (get_local $5)
       )
       (set_local $5
        (i32.const 0)
       )
       (i32.store offset=20
        (get_local $10)
        (i32.const 0)
       )
       (set_local $7
        (i32.add
         (get_local $10)
         (i32.const 20)
        )
       )
       (br_if $label$2
        (i32.eqz
         (tee_local $9
          (select
           (get_local $8)
           (tee_local $9
            (i32.shl
             (get_local $9)
             (i32.const 1)
            )
           )
           (i32.lt_u
            (get_local $9)
            (get_local $8)
           )
          )
         )
        )
       )
       (set_local $5
        (get_local $9)
       )
       (br $label$3)
      )
      (i32.store
       (i32.add
        (get_local $10)
        (i32.const 24)
       )
       (get_local $5)
      )
      (i32.store offset=20
       (get_local $10)
       (i32.const 0)
      )
      (set_local $7
       (i32.add
        (get_local $10)
        (i32.const 20)
       )
      )
      (set_local $5
       (i32.const 178956970)
      )
     )
     (set_local $8
      (call $_Znwj
       (i32.mul
        (get_local $5)
        (i32.const 24)
       )
      )
     )
     (br $label$0)
    )
    (set_local $8
     (i32.const 0)
    )
    (br $label$0)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (get_local $0)
   )
   (unreachable)
  )
  (i32.store offset=8
   (get_local $10)
   (get_local $8)
  )
  (i32.store offset=12
   (get_local $10)
   (tee_local $9
    (i32.add
     (get_local $8)
     (i32.mul
      (get_local $4)
      (i32.const 24)
     )
    )
   )
  )
  (i32.store
   (get_local $7)
   (tee_local $5
    (i32.add
     (get_local $8)
     (i32.mul
      (get_local $5)
      (i32.const 24)
     )
    )
   )
  )
  (set_local $8
   (i32.load
    (get_local $1)
   )
  )
  (i32.store
   (get_local $1)
   (i32.const 0)
  )
  (set_local $1
   (i32.load
    (get_local $3)
   )
  )
  (set_local $6
   (i64.load
    (get_local $2)
   )
  )
  (i32.store
   (get_local $9)
   (get_local $8)
  )
  (i64.store offset=8
   (get_local $9)
   (get_local $6)
  )
  (i32.store offset=16
   (get_local $9)
   (get_local $1)
  )
  (i32.store offset=16
   (get_local $10)
   (tee_local $1
    (i32.add
     (get_local $9)
     (i32.const 24)
    )
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.eq
     (tee_local $8
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 4)
       )
      )
     )
     (tee_local $2
      (i32.load
       (get_local $0)
      )
     )
    )
   )
   (loop $label$6
    (set_local $1
     (i32.load
      (tee_local $5
       (i32.add
        (get_local $8)
        (i32.const -24)
       )
      )
     )
    )
    (i32.store
     (get_local $5)
     (i32.const 0)
    )
    (i32.store
     (i32.add
      (get_local $9)
      (i32.const -24)
     )
     (get_local $1)
    )
    (i32.store
     (i32.add
      (get_local $9)
      (i32.const -8)
     )
     (i32.load
      (i32.add
       (get_local $8)
       (i32.const -8)
      )
     )
    )
    (i32.store
     (i32.add
      (get_local $9)
      (i32.const -12)
     )
     (i32.load
      (i32.add
       (get_local $8)
       (i32.const -12)
      )
     )
    )
    (i32.store
     (i32.add
      (get_local $9)
      (i32.const -16)
     )
     (i32.load
      (i32.add
       (get_local $8)
       (i32.const -16)
      )
     )
    )
    (i32.store offset=12
     (get_local $10)
     (tee_local $9
      (i32.add
       (i32.load offset=12
        (get_local $10)
       )
       (i32.const -24)
      )
     )
    )
    (set_local $8
     (get_local $5)
    )
    (br_if $label$6
     (i32.ne
      (get_local $2)
      (get_local $5)
     )
    )
   )
   (set_local $8
    (i32.load
     (i32.add
      (get_local $0)
      (i32.const 4)
     )
    )
   )
   (set_local $5
    (i32.load
     (get_local $7)
    )
   )
   (set_local $2
    (i32.load
     (get_local $0)
    )
   )
   (set_local $1
    (i32.load
     (i32.add
      (get_local $10)
      (i32.const 16)
     )
    )
   )
  )
  (i32.store
   (get_local $0)
   (get_local $9)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (get_local $1)
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $10)
     (i32.const 8)
    )
    (i32.const 8)
   )
   (get_local $8)
  )
  (set_local $8
   (i32.load
    (tee_local $9
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
   )
  )
  (i32.store
   (get_local $9)
   (get_local $5)
  )
  (i32.store offset=12
   (get_local $10)
   (get_local $2)
  )
  (i32.store
   (get_local $7)
   (get_local $8)
  )
  (i32.store offset=8
   (get_local $10)
   (get_local $2)
  )
  (drop
   (call $_ZNSt3__114__split_bufferIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrERNS_9allocatorIS6_EEED2Ev
    (i32.add
     (get_local $10)
     (i32.const 8)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 32)
   )
  )
 )
 (func $_ZNSt3__114__split_bufferIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrERNS_9allocatorIS6_EEED2Ev (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (block $label$0
   (br_if $label$0
    (i32.eq
     (tee_local $2
      (i32.load offset=8
       (get_local $0)
      )
     )
     (tee_local $1
      (i32.load offset=4
       (get_local $0)
      )
     )
    )
   )
   (set_local $4
    (i32.add
     (get_local $0)
     (i32.const 8)
    )
   )
   (loop $label$1
    (i32.store
     (get_local $4)
     (tee_local $3
      (i32.add
       (get_local $2)
       (i32.const -24)
      )
     )
    )
    (set_local $2
     (i32.load
      (get_local $3)
     )
    )
    (i32.store
     (get_local $3)
     (i32.const 0)
    )
    (block $label$2
     (br_if $label$2
      (i32.eqz
       (get_local $2)
      )
     )
     (block $label$3
      (br_if $label$3
       (i32.eqz
        (tee_local $3
         (i32.load
          (i32.add
           (get_local $2)
           (i32.const 44)
          )
         )
        )
       )
      )
      (i32.store
       (i32.add
        (get_local $2)
        (i32.const 48)
       )
       (get_local $3)
      )
      (call $_ZdlPv
       (get_local $3)
      )
     )
     (block $label$4
      (br_if $label$4
       (i32.eqz
        (tee_local $3
         (i32.load
          (i32.add
           (get_local $2)
           (i32.const 32)
          )
         )
        )
       )
      )
      (i32.store
       (i32.add
        (get_local $2)
        (i32.const 36)
       )
       (get_local $3)
      )
      (call $_ZdlPv
       (get_local $3)
      )
     )
     (block $label$5
      (br_if $label$5
       (i32.eqz
        (tee_local $3
         (i32.load
          (i32.add
           (get_local $2)
           (i32.const 20)
          )
         )
        )
       )
      )
      (i32.store
       (i32.add
        (get_local $2)
        (i32.const 24)
       )
       (get_local $3)
      )
      (call $_ZdlPv
       (get_local $3)
      )
     )
     (block $label$6
      (br_if $label$6
       (i32.eqz
        (i32.and
         (i32.load8_u
          (i32.add
           (get_local $2)
           (i32.const 8)
          )
         )
         (i32.const 1)
        )
       )
      )
      (call $_ZdlPv
       (i32.load
        (i32.add
         (get_local $2)
         (i32.const 16)
        )
       )
      )
     )
     (call $_ZdlPv
      (get_local $2)
     )
    )
    (br_if $label$1
     (i32.ne
      (tee_local $2
       (i32.load
        (get_local $4)
       )
      )
      (get_local $1)
     )
    )
   )
  )
  (block $label$7
   (br_if $label$7
    (i32.eqz
     (tee_local $2
      (i32.load
       (get_local $0)
      )
     )
    )
   )
   (call $_ZdlPv
    (get_local $2)
   )
  )
  (get_local $0)
 )
 (func $_ZNSt3__16vectorIyNS_9allocatorIyEEE8__appendEj (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (br_if $label$4
        (i32.ge_u
         (i32.shr_s
          (i32.sub
           (tee_local $7
            (i32.load offset=8
             (get_local $0)
            )
           )
           (tee_local $2
            (i32.load offset=4
             (get_local $0)
            )
           )
          )
          (i32.const 3)
         )
         (get_local $1)
        )
       )
       (br_if $label$2
        (i32.ge_u
         (tee_local $2
          (i32.add
           (tee_local $4
            (i32.shr_s
             (i32.sub
              (get_local $2)
              (tee_local $3
               (i32.load
                (get_local $0)
               )
              )
             )
             (i32.const 3)
            )
           )
           (get_local $1)
          )
         )
         (i32.const 536870912)
        )
       )
       (set_local $6
        (i32.const 536870911)
       )
       (block $label$5
        (br_if $label$5
         (i32.gt_u
          (i32.shr_s
           (tee_local $7
            (i32.sub
             (get_local $7)
             (get_local $3)
            )
           )
           (i32.const 3)
          )
          (i32.const 268435454)
         )
        )
        (br_if $label$3
         (i32.eqz
          (tee_local $6
           (select
            (get_local $2)
            (tee_local $6
             (i32.shr_s
              (get_local $7)
              (i32.const 2)
             )
            )
            (i32.lt_u
             (get_local $6)
             (get_local $2)
            )
           )
          )
         )
        )
        (br_if $label$1
         (i32.ge_u
          (get_local $6)
          (i32.const 536870912)
         )
        )
       )
       (set_local $7
        (call $_Znwj
         (i32.shl
          (get_local $6)
          (i32.const 3)
         )
        )
       )
       (br $label$0)
      )
      (set_local $6
       (get_local $2)
      )
      (set_local $7
       (get_local $1)
      )
      (loop $label$6
       (i64.store
        (get_local $6)
        (i64.const 0)
       )
       (set_local $6
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
       )
       (br_if $label$6
        (tee_local $7
         (i32.add
          (get_local $7)
          (i32.const -1)
         )
        )
       )
      )
      (i32.store
       (i32.add
        (get_local $0)
        (i32.const 4)
       )
       (i32.add
        (get_local $2)
        (i32.shl
         (get_local $1)
         (i32.const 3)
        )
       )
      )
      (return)
     )
     (set_local $6
      (i32.const 0)
     )
     (set_local $7
      (i32.const 0)
     )
     (br $label$0)
    )
    (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
     (get_local $0)
    )
    (unreachable)
   )
   (call $abort)
   (unreachable)
  )
  (set_local $3
   (i32.add
    (get_local $7)
    (i32.shl
     (get_local $6)
     (i32.const 3)
    )
   )
  )
  (set_local $6
   (tee_local $2
    (i32.add
     (get_local $7)
     (i32.shl
      (get_local $4)
      (i32.const 3)
     )
    )
   )
  )
  (set_local $7
   (get_local $1)
  )
  (loop $label$7
   (i64.store
    (get_local $6)
    (i64.const 0)
   )
   (set_local $6
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
   )
   (br_if $label$7
    (tee_local $7
     (i32.add
      (get_local $7)
      (i32.const -1)
     )
    )
   )
  )
  (set_local $4
   (i32.add
    (get_local $2)
    (i32.shl
     (get_local $1)
     (i32.const 3)
    )
   )
  )
  (set_local $1
   (i32.sub
    (get_local $2)
    (tee_local $7
     (i32.sub
      (i32.load
       (tee_local $5
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
      )
      (tee_local $6
       (i32.load
        (get_local $0)
       )
      )
     )
    )
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.lt_s
     (get_local $7)
     (i32.const 1)
    )
   )
   (drop
    (call $memcpy
     (get_local $1)
     (get_local $6)
     (get_local $7)
    )
   )
   (set_local $6
    (i32.load
     (get_local $0)
    )
   )
  )
  (i32.store
   (get_local $0)
   (get_local $1)
  )
  (i32.store
   (get_local $5)
   (get_local $4)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (get_local $3)
  )
  (block $label$9
   (br_if $label$9
    (i32.eqz
     (get_local $6)
    )
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
 )
 (func $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__16vectorIcNS7_9allocatorIcEEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (set_local $5
   (i32.load offset=4
    (get_local $0)
   )
  )
  (set_local $7
   (i32.const 0)
  )
  (set_local $6
   (i64.const 0)
  )
  (set_local $2
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
  )
  (set_local $3
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
  )
  (loop $label$0
   (call $eosio_assert
    (i32.lt_u
     (get_local $5)
     (i32.load
      (get_local $2)
     )
    )
    (i32.const 656)
   )
   (set_local $4
    (i32.load8_u
     (tee_local $5
      (i32.load
       (get_local $3)
      )
     )
    )
   )
   (i32.store
    (get_local $3)
    (tee_local $5
     (i32.add
      (get_local $5)
      (i32.const 1)
     )
    )
   )
   (set_local $6
    (i64.or
     (i64.extend_u/i32
      (i32.shl
       (i32.and
        (get_local $4)
        (i32.const 127)
       )
       (tee_local $7
        (i32.and
         (get_local $7)
         (i32.const 255)
        )
       )
      )
     )
     (get_local $6)
    )
   )
   (set_local $7
    (i32.add
     (get_local $7)
     (i32.const 7)
    )
   )
   (br_if $label$0
    (i32.shr_u
     (get_local $4)
     (i32.const 7)
    )
   )
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.le_u
      (tee_local $3
       (i32.wrap/i64
        (get_local $6)
       )
      )
      (tee_local $2
       (i32.sub
        (tee_local $7
         (i32.load offset=4
          (get_local $1)
         )
        )
        (tee_local $4
         (i32.load
          (get_local $1)
         )
        )
       )
      )
     )
    )
    (call $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj
     (get_local $1)
     (i32.sub
      (get_local $3)
      (get_local $2)
     )
    )
    (set_local $5
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $7
     (i32.load
      (i32.add
       (get_local $1)
       (i32.const 4)
      )
     )
    )
    (set_local $4
     (i32.load
      (get_local $1)
     )
    )
    (br $label$1)
   )
   (br_if $label$1
    (i32.ge_u
     (get_local $3)
     (get_local $2)
    )
   )
   (i32.store
    (i32.add
     (get_local $1)
     (i32.const 4)
    )
    (tee_local $7
     (i32.add
      (get_local $4)
      (get_local $3)
     )
    )
   )
  )
  (call $eosio_assert
   (i32.ge_u
    (i32.sub
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 8)
      )
     )
     (get_local $5)
    )
    (tee_local $5
     (i32.sub
      (get_local $7)
      (get_local $4)
     )
    )
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (get_local $4)
    (i32.load
     (tee_local $7
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (get_local $5)
   )
  )
  (i32.store
   (get_local $7)
   (i32.add
    (i32.load
     (get_local $7)
    )
    (get_local $5)
   )
  )
  (get_local $0)
 )
 (func $_ZN4repo11assert_zeroENSt3__16vectorIyNS0_9allocatorIyEEEE (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $7)
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=16
   (get_local $7)
   (i64.const -1)
  )
  (i64.store
   (get_local $7)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=8
   (get_local $7)
   (get_local $4)
  )
  (i64.store offset=24
   (get_local $7)
   (i64.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.le_s
     (tee_local $0
      (call $db_lowerbound_i64
       (get_local $4)
       (get_local $4)
       (i64.const -4818099535333031936)
       (i64.const 0)
      )
     )
     (i32.const -1)
    )
   )
   (set_local $0
    (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
     (get_local $7)
     (get_local $0)
    )
   )
   (set_local $5
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
   )
   (set_local $6
    (i32.add
     (get_local $1)
     (i32.const 4)
    )
   )
   (loop $label$1
    (set_local $2
     (i32.add
      (get_local $0)
      (i32.const 56)
     )
    )
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.eq
        (tee_local $3
         (i32.load
          (get_local $6)
         )
        )
        (i32.load
         (get_local $5)
        )
       )
      )
      (i32.store
       (get_local $6)
       (i32.add
        (get_local $3)
        (i32.const 8)
       )
      )
      (i64.store
       (get_local $3)
       (i64.load
        (get_local $2)
       )
      )
      (br $label$2)
     )
     (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIRKyEEvOT_
      (get_local $1)
      (get_local $2)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 224)
    )
    (br_if $label$0
     (i32.le_s
      (tee_local $0
       (call $db_next_i64
        (i32.load offset=68
         (get_local $0)
        )
        (i32.add
         (get_local $7)
         (i32.const 40)
        )
       )
      )
      (i32.const -1)
     )
    )
    (set_local $0
     (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
      (get_local $7)
      (get_local $0)
     )
    )
    (br $label$1)
   )
  )
  (block $label$4
   (block $label$5
    (block $label$6
     (br_if $label$6
      (i32.eq
       (tee_local $0
        (i32.load
         (get_local $1)
        )
       )
       (tee_local $3
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 4)
         )
        )
       )
      )
     )
     (loop $label$7
      (br_if $label$6
       (i64.eqz
        (i64.load
         (get_local $0)
        )
       )
      )
      (br_if $label$7
       (i32.ne
        (get_local $3)
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const 8)
         )
        )
       )
      )
      (br $label$5)
     )
    )
    (br_if $label$4
     (i32.ne
      (get_local $0)
      (get_local $3)
     )
    )
   )
   (call $eosio_assert
    (i32.const 0)
    (i32.const 672)
   )
  )
  (drop
   (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
    (i32.add
     (get_local $7)
     (i32.const 24)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $7)
    (i32.const 48)
   )
  )
 )
 (func $_ZN4repo13assert_uniqueENSt3__16vectorIyNS0_9allocatorIyEEEE (param $0 i32) (param $1 i32)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 64)
    )
   )
  )
  (i32.store offset=48
   (get_local $6)
   (i32.const 0)
  )
  (i64.store offset=40
   (get_local $6)
   (i64.const 0)
  )
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (tee_local $4
       (i32.shr_s
        (tee_local $3
         (i32.sub
          (i32.load offset=4
           (get_local $1)
          )
          (i32.load
           (get_local $1)
          )
         )
        )
        (i32.const 3)
       )
      )
     )
    )
    (br_if $label$0
     (i32.ge_u
      (get_local $4)
      (i32.const 536870912)
     )
    )
    (i32.store
     (i32.add
      (get_local $6)
      (i32.const 48)
     )
     (i32.add
      (tee_local $3
       (call $_Znwj
        (get_local $3)
       )
      )
      (i32.shl
       (get_local $4)
       (i32.const 3)
      )
     )
    )
    (i32.store offset=40
     (get_local $6)
     (get_local $3)
    )
    (i32.store offset=44
     (get_local $6)
     (get_local $3)
    )
    (br_if $label$1
     (i32.lt_s
      (tee_local $1
       (i32.sub
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 4)
         )
        )
        (tee_local $4
         (i32.load
          (get_local $1)
         )
        )
       )
      )
      (i32.const 1)
     )
    )
    (drop
     (call $memcpy
      (get_local $3)
      (get_local $4)
      (get_local $1)
     )
    )
    (i32.store offset=44
     (get_local $6)
     (i32.add
      (get_local $3)
      (get_local $1)
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $6)
     (i32.const 32)
    )
    (i32.const 0)
   )
   (i64.store offset=16
    (get_local $6)
    (i64.const -1)
   )
   (i64.store
    (get_local $6)
    (tee_local $2
     (i64.load
      (get_local $0)
     )
    )
   )
   (i64.store offset=8
    (get_local $6)
    (get_local $2)
   )
   (i64.store offset=24
    (get_local $6)
    (i64.const 0)
   )
   (block $label$2
    (br_if $label$2
     (i32.lt_s
      (tee_local $1
       (call $db_lowerbound_i64
        (get_local $2)
        (get_local $2)
        (i64.const -4818099535333031936)
        (i64.const 0)
       )
      )
      (i32.const 0)
     )
    )
    (set_local $1
     (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
      (get_local $6)
      (get_local $1)
     )
    )
    (set_local $0
     (i32.add
      (i32.add
       (get_local $6)
       (i32.const 40)
      )
      (i32.const 8)
     )
    )
    (loop $label$3
     (set_local $4
      (i32.add
       (get_local $1)
       (i32.const 56)
      )
     )
     (block $label$4
      (block $label$5
       (br_if $label$5
        (i32.eq
         (tee_local $3
          (i32.load offset=44
           (get_local $6)
          )
         )
         (i32.load
          (get_local $0)
         )
        )
       )
       (i64.store
        (get_local $3)
        (i64.load
         (get_local $4)
        )
       )
       (i32.store offset=44
        (get_local $6)
        (i32.add
         (get_local $3)
         (i32.const 8)
        )
       )
       (br $label$4)
      )
      (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIRKyEEvOT_
       (i32.add
        (get_local $6)
        (i32.const 40)
       )
       (get_local $4)
      )
     )
     (call $eosio_assert
      (i32.const 1)
      (i32.const 224)
     )
     (br_if $label$2
      (i32.le_s
       (tee_local $1
        (call $db_next_i64
         (i32.load offset=68
          (get_local $1)
         )
         (i32.add
          (get_local $6)
          (i32.const 56)
         )
        )
       )
       (i32.const -1)
      )
     )
     (set_local $1
      (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
       (get_local $6)
       (get_local $1)
      )
     )
     (br $label$3)
    )
   )
   (call $_ZNSt3__16__sortIRNS_6__lessIyyEEPyEEvT0_S5_T_
    (i32.load offset=40
     (get_local $6)
    )
    (i32.load offset=44
     (get_local $6)
    )
    (i32.add
     (get_local $6)
     (i32.const 56)
    )
   )
   (block $label$6
    (br_if $label$6
     (i32.eq
      (i32.sub
       (tee_local $5
        (i32.load offset=44
         (get_local $6)
        )
       )
       (tee_local $4
        (i32.load offset=40
         (get_local $6)
        )
       )
      )
      (i32.const 8)
     )
    )
    (set_local $1
     (i32.const 8)
    )
    (set_local $3
     (i32.const 0)
    )
    (loop $label$7
     (set_local $3
      (i32.add
       (get_local $3)
       (i32.const 1)
      )
     )
     (block $label$8
      (br_if $label$8
       (i64.ne
        (i64.load
         (i32.add
          (tee_local $0
           (i32.add
            (get_local $4)
            (get_local $1)
           )
          )
          (i32.const -8)
         )
        )
        (i64.load
         (get_local $0)
        )
       )
      )
      (call $eosio_assert
       (i32.const 0)
       (i32.const 720)
      )
      (set_local $4
       (i32.load offset=40
        (get_local $6)
       )
      )
      (set_local $5
       (i32.load offset=44
        (get_local $6)
       )
      )
     )
     (set_local $1
      (i32.add
       (get_local $1)
       (i32.const 8)
      )
     )
     (br_if $label$7
      (i32.lt_u
       (get_local $3)
       (i32.add
        (i32.shr_s
         (i32.sub
          (get_local $5)
          (get_local $4)
         )
         (i32.const 3)
        )
        (i32.const -1)
       )
      )
     )
    )
   )
   (drop
    (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
     (i32.add
      (get_local $6)
      (i32.const 24)
     )
    )
   )
   (block $label$9
    (br_if $label$9
     (i32.eqz
      (tee_local $1
       (i32.load offset=40
        (get_local $6)
       )
      )
     )
    )
    (i32.store offset=44
     (get_local $6)
     (get_local $1)
    )
    (call $_ZdlPv
     (get_local $1)
    )
   )
   (i32.store offset=4
    (i32.const 0)
    (i32.add
     (get_local $6)
     (i32.const 64)
    )
   )
   (return)
  )
  (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
   (i32.add
    (get_local $6)
    (i32.const 40)
   )
  )
  (unreachable)
 )
 (func $_ZN4repo11assert_compENSt3__16vectorIyNS0_9allocatorIyEEEE (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (block $label$0
   (br_if $label$0
    (i32.eq
     (i32.sub
      (tee_local $6
       (i32.load offset=4
        (get_local $1)
       )
      )
      (tee_local $5
       (i32.load
        (get_local $1)
       )
      )
     )
     (i32.const 8)
    )
   )
   (set_local $2
    (i32.add
     (get_local $1)
     (i32.const 4)
    )
   )
   (set_local $3
    (i32.const 0)
   )
   (set_local $4
    (i32.const 0)
   )
   (loop $label$1
    (block $label$2
     (br_if $label$2
      (i64.lt_u
       (i64.load
        (i32.add
         (get_local $5)
         (get_local $3)
        )
       )
       (i64.const 10001)
      )
     )
     (call $eosio_assert
      (i32.const 0)
      (i32.const 768)
     )
     (set_local $6
      (i32.load
       (get_local $2)
      )
     )
     (set_local $5
      (i32.load
       (get_local $1)
      )
     )
    )
    (set_local $3
     (i32.add
      (get_local $3)
      (i32.const 8)
     )
    )
    (br_if $label$1
     (i32.lt_u
      (tee_local $4
       (i32.add
        (get_local $4)
        (i32.const 1)
       )
      )
      (i32.add
       (i32.shr_s
        (i32.sub
         (get_local $6)
         (get_local $5)
        )
        (i32.const 3)
       )
       (i32.const -1)
      )
     )
    )
   )
  )
 )
 (func $_ZN4repo12assert_countEy (param $0 i32) (param $1 i64)
  (local $2 i64)
  (local $3 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $3
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $3)
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=16
   (get_local $3)
   (i64.const -1)
  )
  (i64.store
   (get_local $3)
   (tee_local $2
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=8
   (get_local $3)
   (get_local $2)
  )
  (i64.store offset=24
   (get_local $3)
   (i64.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $0
      (call $db_lowerbound_i64
       (get_local $2)
       (get_local $2)
       (i64.const -4818099535333031936)
       (i64.const 0)
      )
     )
     (i32.const 0)
    )
   )
   (set_local $0
    (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
     (get_local $3)
     (get_local $0)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 224)
   )
   (set_local $1
    (i64.add
     (get_local $1)
     (i64.const 1)
    )
   )
   (br_if $label$0
    (i32.lt_s
     (tee_local $0
      (call $db_next_i64
       (i32.load offset=68
        (get_local $0)
       )
       (i32.add
        (get_local $3)
        (i32.const 40)
       )
      )
     )
     (i32.const 0)
    )
   )
   (loop $label$1
    (set_local $0
     (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
      (get_local $3)
      (get_local $0)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 224)
    )
    (set_local $1
     (i64.add
      (get_local $1)
      (i64.const 1)
     )
    )
    (br_if $label$1
     (i32.ge_s
      (tee_local $0
       (call $db_next_i64
        (i32.load offset=68
         (get_local $0)
        )
        (i32.add
         (get_local $3)
         (i32.const 40)
        )
       )
      )
      (i32.const 0)
     )
    )
   )
  )
  (call $eosio_assert
   (i64.lt_u
    (get_local $1)
    (i64.const 20)
   )
   (i32.const 832)
  )
  (drop
   (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
    (i32.add
     (get_local $3)
     (i32.const 24)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $3)
    (i32.const 48)
   )
  )
 )
 (func $_ZN4repo6createEyyNSt3__16vectorINS0_12basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEENS5_IS7_EEEENS1_IyNS5_IyEEEESB_SB_SB_y (type $FUNCSIG$vijjiiiiij) (param $0 i32) (param $1 i64) (param $2 i64) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32) (param $7 i32) (param $8 i64)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i64)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local $23 i32)
  (local $24 i32)
  (local $25 i32)
  (local $26 i32)
  (local $27 i32)
  (local $28 i64)
  (local $29 i32)
  (local $30 i32)
  (local $31 i64)
  (local $32 i64)
  (local $33 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $33
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 272)
    )
   )
  )
  (call $require_auth
   (i64.load
    (get_local $0)
   )
  )
  (i32.store
   (tee_local $15
    (i32.add
     (get_local $33)
     (i32.const 224)
    )
   )
   (i32.const 0)
  )
  (i64.store offset=208
   (get_local $33)
   (i64.const -1)
  )
  (i64.store offset=216
   (get_local $33)
   (i64.const 0)
  )
  (i64.store offset=192
   (get_local $33)
   (tee_local $31
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=200
   (get_local $33)
   (get_local $31)
  )
  (call $eosio_assert
   (i64.eq
    (get_local $31)
    (call $current_receiver)
   )
   (i32.const 880)
  )
  (i32.store offset=32
   (tee_local $30
    (call $_Znwj
     (i32.const 48)
    )
   )
   (i32.add
    (get_local $33)
    (i32.const 192)
   )
  )
  (i32.store8 offset=16
   (get_local $30)
   (i32.const 1)
  )
  (i64.store offset=8
   (get_local $30)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $30)
   (get_local $8)
  )
  (i64.store
   (get_local $30)
   (get_local $1)
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $33)
     (i32.const 32)
    )
    (get_local $30)
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.or
     (i32.add
      (get_local $33)
      (i32.const 32)
     )
     (i32.const 8)
    )
    (i32.add
     (get_local $30)
     (i32.const 8)
    )
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.add
     (i32.add
      (get_local $33)
      (i32.const 32)
     )
     (i32.const 16)
    )
    (i32.add
     (get_local $30)
     (i32.const 16)
    )
    (i32.const 1)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $33)
     (i32.const 49)
    )
    (i32.add
     (get_local $30)
     (i32.const 24)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=36
   (get_local $30)
   (tee_local $18
    (call $db_store_i64
     (i64.load offset=200
      (get_local $33)
     )
     (i64.const -7876113394178195456)
     (get_local $31)
     (tee_local $1
      (i64.load
       (get_local $30)
      )
     )
     (i32.add
      (get_local $33)
      (i32.const 32)
     )
     (i32.const 25)
    )
   )
  )
  (block $label$0
   (br_if $label$0
    (i64.lt_u
     (get_local $1)
     (i64.load offset=208
      (get_local $33)
     )
    )
   )
   (i64.store
    (i32.add
     (i32.add
      (get_local $33)
      (i32.const 192)
     )
     (i32.const 16)
    )
    (select
     (i64.const -2)
     (i64.add
      (get_local $1)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $1)
      (i64.const -3)
     )
    )
   )
  )
  (i32.store offset=104
   (get_local $33)
   (get_local $30)
  )
  (i64.store offset=32
   (get_local $33)
   (tee_local $31
    (i64.load
     (get_local $30)
    )
   )
  )
  (i32.store offset=240
   (get_local $33)
   (get_local $18)
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.ge_u
      (tee_local $29
       (i32.load
        (tee_local $22
         (i32.add
          (get_local $33)
          (i32.const 220)
         )
        )
       )
      )
      (i32.load
       (get_local $15)
      )
     )
    )
    (i64.store offset=8
     (get_local $29)
     (get_local $31)
    )
    (i32.store offset=16
     (get_local $29)
     (get_local $18)
    )
    (i32.store offset=104
     (get_local $33)
     (i32.const 0)
    )
    (i32.store
     (get_local $29)
     (get_local $30)
    )
    (i32.store
     (get_local $22)
     (i32.add
      (get_local $29)
      (i32.const 24)
     )
    )
    (br $label$1)
   )
   (call $_ZNSt3__16vectorIN5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
    (i32.add
     (get_local $33)
     (i32.const 216)
    )
    (i32.add
     (get_local $33)
     (i32.const 104)
    )
    (i32.add
     (get_local $33)
     (i32.const 32)
    )
    (i32.add
     (get_local $33)
     (i32.const 240)
    )
   )
  )
  (set_local $30
   (i32.load offset=104
    (get_local $33)
   )
  )
  (i32.store offset=104
   (get_local $33)
   (i32.const 0)
  )
  (block $label$3
   (br_if $label$3
    (i32.eqz
     (get_local $30)
    )
   )
   (call $_ZdlPv
    (get_local $30)
   )
  )
  (call $_ZN4repo12assert_countEy
   (get_local $0)
   (get_local $2)
  )
  (call $eosio_assert
   (i64.eq
    (i64.extend_u/i32
     (i32.div_s
      (i32.sub
       (i32.load offset=4
        (get_local $3)
       )
       (i32.load
        (get_local $3)
       )
      )
      (i32.const 12)
     )
    )
    (get_local $2)
   )
   (i32.const 944)
  )
  (call $eosio_assert
   (i64.eq
    (tee_local $31
     (i64.mul
      (get_local $2)
      (i64.const 7)
     )
    )
    (i64.extend_u/i32
     (i32.shr_s
      (i32.sub
       (i32.load offset=4
        (get_local $4)
       )
       (i32.load
        (get_local $4)
       )
      )
      (i32.const 3)
     )
    )
   )
   (i32.const 992)
  )
  (call $eosio_assert
   (i64.eq
    (get_local $31)
    (i64.extend_u/i32
     (i32.shr_s
      (i32.sub
       (i32.load offset=4
        (get_local $5)
       )
       (i32.load
        (get_local $5)
       )
      )
      (i32.const 3)
     )
    )
   )
   (i32.const 1040)
  )
  (call $eosio_assert
   (i64.eq
    (get_local $31)
    (i64.extend_u/i32
     (i32.shr_s
      (i32.sub
       (i32.load offset=4
        (get_local $6)
       )
       (i32.load
        (get_local $6)
       )
      )
      (i32.const 3)
     )
    )
   )
   (i32.const 1088)
  )
  (call $eosio_assert
   (i64.eq
    (i64.extend_u/i32
     (i32.shr_s
      (i32.sub
       (i32.load offset=4
        (get_local $7)
       )
       (i32.load
        (get_local $7)
       )
      )
      (i32.const 3)
     )
    )
    (get_local $2)
   )
   (i32.const 1136)
  )
  (i32.store offset=184
   (get_local $33)
   (i32.const 0)
  )
  (i64.store offset=176
   (get_local $33)
   (i64.const 0)
  )
  (block $label$4
   (block $label$5
    (block $label$6
     (block $label$7
      (br_if $label$7
       (i32.eqz
        (tee_local $29
         (i32.shr_s
          (tee_local $30
           (i32.sub
            (i32.load offset=4
             (get_local $7)
            )
            (i32.load
             (get_local $7)
            )
           )
          )
          (i32.const 3)
         )
        )
       )
      )
      (br_if $label$6
       (i32.ge_u
        (get_local $29)
        (i32.const 536870912)
       )
      )
      (i32.store
       (i32.add
        (get_local $33)
        (i32.const 184)
       )
       (i32.add
        (tee_local $30
         (call $_Znwj
          (get_local $30)
         )
        )
        (i32.shl
         (get_local $29)
         (i32.const 3)
        )
       )
      )
      (i32.store offset=176
       (get_local $33)
       (get_local $30)
      )
      (i32.store offset=180
       (get_local $33)
       (get_local $30)
      )
      (br_if $label$7
       (i32.lt_s
        (tee_local $29
         (i32.sub
          (i32.load
           (i32.add
            (get_local $7)
            (i32.const 4)
           )
          )
          (tee_local $18
           (i32.load
            (get_local $7)
           )
          )
         )
        )
        (i32.const 1)
       )
      )
      (drop
       (call $memcpy
        (get_local $30)
        (get_local $18)
        (get_local $29)
       )
      )
      (i32.store offset=180
       (get_local $33)
       (i32.add
        (i32.load offset=180
         (get_local $33)
        )
        (get_local $29)
       )
      )
     )
     (call $_ZN4repo11assert_zeroENSt3__16vectorIyNS0_9allocatorIyEEEE
      (get_local $0)
      (i32.add
       (get_local $33)
       (i32.const 176)
      )
     )
     (block $label$8
      (br_if $label$8
       (i32.eqz
        (tee_local $30
         (i32.load offset=176
          (get_local $33)
         )
        )
       )
      )
      (i32.store offset=180
       (get_local $33)
       (get_local $30)
      )
      (call $_ZdlPv
       (get_local $30)
      )
     )
     (i32.store offset=168
      (get_local $33)
      (i32.const 0)
     )
     (i64.store offset=160
      (get_local $33)
      (i64.const 0)
     )
     (block $label$9
      (br_if $label$9
       (i32.eqz
        (tee_local $29
         (i32.shr_s
          (tee_local $30
           (i32.sub
            (i32.load
             (i32.add
              (get_local $7)
              (i32.const 4)
             )
            )
            (i32.load
             (get_local $7)
            )
           )
          )
          (i32.const 3)
         )
        )
       )
      )
      (br_if $label$5
       (i32.ge_u
        (get_local $29)
        (i32.const 536870912)
       )
      )
      (i32.store
       (i32.add
        (get_local $33)
        (i32.const 168)
       )
       (i32.add
        (tee_local $30
         (call $_Znwj
          (get_local $30)
         )
        )
        (i32.shl
         (get_local $29)
         (i32.const 3)
        )
       )
      )
      (i32.store offset=160
       (get_local $33)
       (get_local $30)
      )
      (i32.store offset=164
       (get_local $33)
       (get_local $30)
      )
      (br_if $label$9
       (i32.lt_s
        (tee_local $29
         (i32.sub
          (i32.load
           (i32.add
            (get_local $7)
            (i32.const 4)
           )
          )
          (tee_local $18
           (i32.load
            (get_local $7)
           )
          )
         )
        )
        (i32.const 1)
       )
      )
      (drop
       (call $memcpy
        (get_local $30)
        (get_local $18)
        (get_local $29)
       )
      )
      (i32.store offset=164
       (get_local $33)
       (i32.add
        (i32.load offset=164
         (get_local $33)
        )
        (get_local $29)
       )
      )
     )
     (call $_ZN4repo13assert_uniqueENSt3__16vectorIyNS0_9allocatorIyEEEE
      (get_local $0)
      (i32.add
       (get_local $33)
       (i32.const 160)
      )
     )
     (block $label$10
      (br_if $label$10
       (i32.eqz
        (tee_local $30
         (i32.load offset=160
          (get_local $33)
         )
        )
       )
      )
      (i32.store offset=164
       (get_local $33)
       (get_local $30)
      )
      (call $_ZdlPv
       (get_local $30)
      )
     )
     (set_local $29
      (i32.const 0)
     )
     (i32.store offset=152
      (get_local $33)
      (i32.const 0)
     )
     (i64.store offset=144
      (get_local $33)
      (i64.const 0)
     )
     (block $label$11
      (block $label$12
       (block $label$13
        (br_if $label$13
         (i32.eqz
          (tee_local $30
           (i32.shr_s
            (tee_local $18
             (i32.sub
              (i32.load
               (i32.add
                (get_local $5)
                (i32.const 4)
               )
              )
              (i32.load
               (get_local $5)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$4
         (i32.ge_u
          (get_local $30)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $33)
          (i32.const 152)
         )
         (i32.add
          (tee_local $29
           (call $_Znwj
            (get_local $18)
           )
          )
          (i32.shl
           (get_local $30)
           (i32.const 3)
          )
         )
        )
        (i32.store offset=144
         (get_local $33)
         (get_local $29)
        )
        (i32.store offset=148
         (get_local $33)
         (get_local $29)
        )
        (br_if $label$12
         (i32.lt_s
          (tee_local $30
           (i32.sub
            (i32.load
             (i32.add
              (get_local $5)
              (i32.const 4)
             )
            )
            (tee_local $18
             (i32.load
              (get_local $5)
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $29)
          (get_local $18)
          (get_local $30)
         )
        )
        (i32.store offset=148
         (get_local $33)
         (tee_local $15
          (i32.add
           (i32.load offset=148
            (get_local $33)
           )
           (get_local $30)
          )
         )
        )
        (set_local $29
         (i32.load offset=144
          (get_local $33)
         )
        )
        (br $label$11)
       )
       (set_local $15
        (i32.const 0)
       )
       (br $label$11)
      )
      (set_local $15
       (get_local $29)
      )
     )
     (block $label$14
      (br_if $label$14
       (i32.eq
        (i32.sub
         (get_local $15)
         (get_local $29)
        )
        (i32.const 8)
       )
      )
      (set_local $30
       (i32.const 0)
      )
      (set_local $18
       (i32.const 0)
      )
      (loop $label$15
       (block $label$16
        (br_if $label$16
         (i64.lt_u
          (i64.load
           (i32.add
            (get_local $29)
            (get_local $30)
           )
          )
          (i64.const 10001)
         )
        )
        (call $eosio_assert
         (i32.const 0)
         (i32.const 768)
        )
        (set_local $29
         (i32.load offset=144
          (get_local $33)
         )
        )
        (set_local $15
         (i32.load offset=148
          (get_local $33)
         )
        )
       )
       (set_local $30
        (i32.add
         (get_local $30)
         (i32.const 8)
        )
       )
       (br_if $label$15
        (i32.lt_u
         (tee_local $18
          (i32.add
           (get_local $18)
           (i32.const 1)
          )
         )
         (i32.add
          (i32.shr_s
           (i32.sub
            (get_local $15)
            (get_local $29)
           )
           (i32.const 3)
          )
          (i32.const -1)
         )
        )
       )
      )
     )
     (block $label$17
      (br_if $label$17
       (i32.eqz
        (get_local $29)
       )
      )
      (i32.store offset=148
       (get_local $33)
       (get_local $29)
      )
      (call $_ZdlPv
       (get_local $29)
      )
     )
     (i32.store
      (tee_local $17
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 104)
        )
        (i32.const 32)
       )
      )
      (i32.const 0)
     )
     (i64.store offset=120
      (get_local $33)
      (i64.const -1)
     )
     (i64.store offset=128
      (get_local $33)
      (i64.const 0)
     )
     (i64.store offset=104
      (get_local $33)
      (tee_local $31
       (i64.load
        (get_local $0)
       )
      )
     )
     (i64.store offset=112
      (get_local $33)
      (get_local $31)
     )
     (block $label$18
      (br_if $label$18
       (i64.eqz
        (get_local $2)
       )
      )
      (set_local $12
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 12)
       )
      )
      (set_local $11
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 36)
       )
      )
      (set_local $10
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 24)
       )
      )
      (set_local $9
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 104)
        )
        (i32.const 24)
       )
      )
      (set_local $19
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 8)
       )
      )
      (set_local $20
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 16)
       )
      )
      (set_local $21
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 32)
       )
      )
      (set_local $22
       (i32.add
        (get_local $33)
        (i32.const 72)
       )
      )
      (set_local $23
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 44)
       )
      )
      (set_local $24
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 48)
       )
      )
      (set_local $25
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 20)
       )
      )
      (set_local $26
       (i32.add
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
        (i32.const 28)
       )
      )
      (set_local $27
       (i32.const 0)
      )
      (set_local $28
       (i64.const 0)
      )
      (loop $label$19
       (block $label$20
        (block $label$21
         (br_if $label$21
          (i32.and
           (i32.load8_u
            (tee_local $14
             (i32.add
              (i32.load
               (get_local $3)
              )
              (i32.mul
               (tee_local $13
                (i32.wrap/i64
                 (get_local $28)
                )
               )
               (i32.const 12)
              )
             )
            )
           )
           (i32.const 1)
          )
         )
         (set_local $30
          (i32.add
           (get_local $14)
           (i32.const 1)
          )
         )
         (br $label$20)
        )
        (set_local $30
         (i32.load offset=8
          (get_local $14)
         )
        )
       )
       (set_local $29
        (i32.const -1)
       )
       (loop $label$22
        (set_local $18
         (i32.add
          (get_local $30)
          (get_local $29)
         )
        )
        (set_local $29
         (tee_local $15
          (i32.add
           (get_local $29)
           (i32.const 1)
          )
         )
        )
        (br_if $label$22
         (i32.load8_u
          (i32.add
           (get_local $18)
           (i32.const 1)
          )
         )
        )
       )
       (set_local $16
        (i64.extend_u/i32
         (get_local $15)
        )
       )
       (set_local $31
        (i64.const 0)
       )
       (set_local $1
        (i64.const 59)
       )
       (set_local $32
        (i64.const 0)
       )
       (loop $label$23
        (set_local $8
         (i64.const 0)
        )
        (block $label$24
         (br_if $label$24
          (i64.ge_u
           (get_local $31)
           (get_local $16)
          )
         )
         (block $label$25
          (block $label$26
           (br_if $label$26
            (i32.gt_u
             (i32.and
              (i32.add
               (tee_local $29
                (i32.load8_s
                 (get_local $30)
                )
               )
               (i32.const -97)
              )
              (i32.const 255)
             )
             (i32.const 25)
            )
           )
           (set_local $29
            (i32.add
             (get_local $29)
             (i32.const 165)
            )
           )
           (br $label$25)
          )
          (set_local $29
           (select
            (i32.add
             (get_local $29)
             (i32.const 208)
            )
            (i32.const 0)
            (i32.lt_u
             (i32.and
              (i32.add
               (get_local $29)
               (i32.const -49)
              )
              (i32.const 255)
             )
             (i32.const 5)
            )
           )
          )
         )
         (set_local $8
          (i64.shr_s
           (i64.shl
            (i64.extend_u/i32
             (get_local $29)
            )
            (i64.const 56)
           )
           (i64.const 56)
          )
         )
        )
        (block $label$27
         (block $label$28
          (br_if $label$28
           (i64.gt_u
            (get_local $31)
            (i64.const 11)
           )
          )
          (set_local $8
           (i64.shl
            (i64.and
             (get_local $8)
             (i64.const 31)
            )
            (i64.and
             (get_local $1)
             (i64.const 4294967295)
            )
           )
          )
          (br $label$27)
         )
         (set_local $8
          (i64.and
           (get_local $8)
           (i64.const 15)
          )
         )
        )
        (set_local $30
         (i32.add
          (get_local $30)
          (i32.const 1)
         )
        )
        (set_local $31
         (i64.add
          (get_local $31)
          (i64.const 1)
         )
        )
        (set_local $32
         (i64.or
          (get_local $8)
          (get_local $32)
         )
        )
        (br_if $label$23
         (i64.ne
          (tee_local $1
           (i64.add
            (get_local $1)
            (i64.const -5)
           )
          )
          (i64.const -6)
         )
        )
       )
       (i64.store offset=96
        (get_local $33)
        (get_local $32)
       )
       (i64.store
        (get_local $19)
        (i64.const 0)
       )
       (i64.store
        (get_local $20)
        (i64.const 0)
       )
       (i64.store
        (get_local $10)
        (i64.const 0)
       )
       (i64.store
        (get_local $21)
        (i64.const 0)
       )
       (i32.store
        (get_local $22)
        (i32.const 0)
       )
       (i64.store offset=32
        (get_local $33)
        (i64.const 0)
       )
       (i32.store
        (get_local $23)
        (i32.const 0)
       )
       (block $label$29
        (block $label$30
         (br_if $label$30
          (i32.and
           (i32.load8_u
            (get_local $14)
           )
           (i32.const 1)
          )
         )
         (set_local $30
          (i32.add
           (get_local $14)
           (i32.const 1)
          )
         )
         (br $label$29)
        )
        (set_local $30
         (i32.load offset=8
          (get_local $14)
         )
        )
       )
       (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc
         (i32.add
          (get_local $33)
          (i32.const 32)
         )
         (get_local $30)
        )
       )
       (i64.store
        (get_local $24)
        (i64.load
         (i32.add
          (i32.load
           (get_local $7)
          )
          (i32.shl
           (get_local $13)
           (i32.const 3)
          )
         )
        )
       )
       (drop
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
         (i32.add
          (get_local $33)
          (i32.const 16)
         )
         (i32.add
          (get_local $33)
          (i32.const 32)
         )
        )
       )
       (call $_ZN4repo11assert_roleENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEb
        (get_local $0)
        (i32.add
         (get_local $33)
         (i32.const 16)
        )
        (i32.const 0)
       )
       (block $label$31
        (br_if $label$31
         (i32.eqz
          (i32.and
           (i32.load8_u offset=16
            (get_local $33)
           )
           (i32.const 1)
          )
         )
        )
        (call $_ZdlPv
         (i32.load
          (i32.add
           (i32.add
            (get_local $33)
            (i32.const 16)
           )
           (i32.const 8)
          )
         )
        )
       )
       (block $label$32
        (br_if $label$32
         (i64.gt_u
          (tee_local $31
           (i64.mul
            (get_local $28)
            (i64.const 7)
           )
          )
          (i64.const -8)
         )
        )
        (set_local $8
         (i64.add
          (get_local $31)
          (i64.const 7)
         )
        )
        (set_local $30
         (get_local $27)
        )
        (loop $label$33
         (i64.store offset=240
          (get_local $33)
          (tee_local $1
           (i64.extend_u/i32
            (i64.ne
             (i64.load
              (i32.add
               (i32.load
                (get_local $4)
               )
               (get_local $30)
              )
             )
             (i64.const 0)
            )
           )
          )
         )
         (block $label$34
          (block $label$35
           (br_if $label$35
            (i32.ge_u
             (tee_local $29
              (i32.load
               (get_local $20)
              )
             )
             (i32.load
              (get_local $25)
             )
            )
           )
           (i64.store
            (get_local $29)
            (get_local $1)
           )
           (i32.store
            (get_local $20)
            (i32.add
             (get_local $29)
             (i32.const 8)
            )
           )
           (br $label$34)
          )
          (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIyEEvOT_
           (get_local $12)
           (i32.add
            (get_local $33)
            (i32.const 240)
           )
          )
         )
         (set_local $18
          (i32.add
           (i32.load
            (get_local $5)
           )
           (get_local $30)
          )
         )
         (block $label$36
          (block $label$37
           (br_if $label$37
            (i32.eq
             (tee_local $29
              (i32.load
               (get_local $26)
              )
             )
             (i32.load
              (get_local $21)
             )
            )
           )
           (i32.store
            (get_local $26)
            (i32.add
             (get_local $29)
             (i32.const 8)
            )
           )
           (i64.store
            (get_local $29)
            (i64.load
             (get_local $18)
            )
           )
           (br $label$36)
          )
          (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIRKyEEvOT_
           (get_local $10)
           (get_local $18)
          )
         )
         (set_local $18
          (i32.add
           (i32.load
            (get_local $6)
           )
           (get_local $30)
          )
         )
         (block $label$38
          (block $label$39
           (br_if $label$39
            (i32.eq
             (tee_local $29
              (i32.load
               (get_local $22)
              )
             )
             (i32.load
              (get_local $23)
             )
            )
           )
           (i32.store
            (get_local $22)
            (i32.add
             (get_local $29)
             (i32.const 8)
            )
           )
           (i64.store
            (get_local $29)
            (i64.load
             (get_local $18)
            )
           )
           (br $label$38)
          )
          (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIRKyEEvOT_
           (get_local $11)
           (get_local $18)
          )
         )
         (set_local $30
          (i32.add
           (get_local $30)
           (i32.const 8)
          )
         )
         (br_if $label$33
          (i64.lt_u
           (tee_local $31
            (i64.add
             (get_local $31)
             (i64.const 1)
            )
           )
           (get_local $8)
          )
         )
        )
       )
       (set_local $31
        (i64.load
         (get_local $0)
        )
       )
       (i32.store offset=12
        (get_local $33)
        (i32.add
         (get_local $33)
         (i32.const 32)
        )
       )
       (i32.store offset=8
        (get_local $33)
        (i32.add
         (get_local $33)
         (i32.const 96)
        )
       )
       (i64.store offset=264
        (get_local $33)
        (get_local $31)
       )
       (call $eosio_assert
        (i64.eq
         (i64.load offset=104
          (get_local $33)
         )
         (call $current_receiver)
        )
        (i32.const 880)
       )
       (i32.store
        (i32.add
         (i32.add
          (get_local $33)
          (i32.const 240)
         )
         (i32.const 8)
        )
        (i32.add
         (get_local $33)
         (i32.const 264)
        )
       )
       (i32.store offset=244
        (get_local $33)
        (i32.add
         (get_local $33)
         (i32.const 8)
        )
       )
       (i32.store offset=240
        (get_local $33)
        (i32.add
         (get_local $33)
         (i32.const 104)
        )
       )
       (i64.store offset=8 align=4
        (tee_local $30
         (call $_Znwj
          (i32.const 80)
         )
        )
        (i64.const 0)
       )
       (i64.store offset=16 align=4
        (get_local $30)
        (i64.const 0)
       )
       (i64.store offset=24 align=4
        (get_local $30)
        (i64.const 0)
       )
       (i64.store offset=32 align=4
        (get_local $30)
        (i64.const 0)
       )
       (i64.store offset=40 align=4
        (get_local $30)
        (i64.const 0)
       )
       (i32.store offset=48
        (get_local $30)
        (i32.const 0)
       )
       (i32.store offset=52
        (get_local $30)
        (i32.const 0)
       )
       (i32.store offset=64
        (get_local $30)
        (i32.add
         (get_local $33)
         (i32.const 104)
        )
       )
       (call $_ZZN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE7emplaceIZNS1_6createEyyNSt3__16vectorINS5_12basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEENSA_ISC_EEEENS6_IyNSA_IyEEEESG_SG_SG_yE3$_3EENS3_14const_iteratorEyOT_ENKUlRSJ_E_clINS3_4itemEEEDaSL_
        (i32.add
         (get_local $33)
         (i32.const 240)
        )
        (get_local $30)
       )
       (i32.store offset=256
        (get_local $33)
        (get_local $30)
       )
       (i64.store offset=240
        (get_local $33)
        (tee_local $31
         (i64.load
          (get_local $30)
         )
        )
       )
       (i32.store offset=236
        (get_local $33)
        (tee_local $18
         (i32.load offset=68
          (get_local $30)
         )
        )
       )
       (block $label$40
        (block $label$41
         (br_if $label$41
          (i32.ge_u
           (tee_local $29
            (i32.load
             (tee_local $15
              (i32.add
               (i32.add
                (get_local $33)
                (i32.const 104)
               )
               (i32.const 28)
              )
             )
            )
           )
           (i32.load
            (get_local $17)
           )
          )
         )
         (i64.store offset=8
          (get_local $29)
          (get_local $31)
         )
         (i32.store offset=16
          (get_local $29)
          (get_local $18)
         )
         (i32.store offset=256
          (get_local $33)
          (i32.const 0)
         )
         (i32.store
          (get_local $29)
          (get_local $30)
         )
         (i32.store
          (get_local $15)
          (i32.add
           (get_local $29)
           (i32.const 24)
          )
         )
         (br $label$40)
        )
        (call $_ZNSt3__16vectorIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
         (get_local $9)
         (i32.add
          (get_local $33)
          (i32.const 256)
         )
         (i32.add
          (get_local $33)
          (i32.const 240)
         )
         (i32.add
          (get_local $33)
          (i32.const 236)
         )
        )
       )
       (set_local $30
        (i32.load offset=256
         (get_local $33)
        )
       )
       (i32.store offset=256
        (get_local $33)
        (i32.const 0)
       )
       (block $label$42
        (br_if $label$42
         (i32.eqz
          (get_local $30)
         )
        )
        (block $label$43
         (br_if $label$43
          (i32.eqz
           (tee_local $29
            (i32.load
             (i32.add
              (get_local $30)
              (i32.const 44)
             )
            )
           )
          )
         )
         (i32.store
          (i32.add
           (get_local $30)
           (i32.const 48)
          )
          (get_local $29)
         )
         (call $_ZdlPv
          (get_local $29)
         )
        )
        (block $label$44
         (br_if $label$44
          (i32.eqz
           (tee_local $29
            (i32.load
             (i32.add
              (get_local $30)
              (i32.const 32)
             )
            )
           )
          )
         )
         (i32.store
          (i32.add
           (get_local $30)
           (i32.const 36)
          )
          (get_local $29)
         )
         (call $_ZdlPv
          (get_local $29)
         )
        )
        (block $label$45
         (br_if $label$45
          (i32.eqz
           (tee_local $29
            (i32.load
             (i32.add
              (get_local $30)
              (i32.const 20)
             )
            )
           )
          )
         )
         (i32.store
          (i32.add
           (get_local $30)
           (i32.const 24)
          )
          (get_local $29)
         )
         (call $_ZdlPv
          (get_local $29)
         )
        )
        (block $label$46
         (br_if $label$46
          (i32.eqz
           (i32.and
            (i32.load8_u
             (i32.add
              (get_local $30)
              (i32.const 8)
             )
            )
            (i32.const 1)
           )
          )
         )
         (call $_ZdlPv
          (i32.load
           (i32.add
            (get_local $30)
            (i32.const 16)
           )
          )
         )
        )
        (call $_ZdlPv
         (get_local $30)
        )
       )
       (block $label$47
        (br_if $label$47
         (i32.eqz
          (tee_local $30
           (i32.load
            (get_local $11)
           )
          )
         )
        )
        (i32.store
         (get_local $22)
         (get_local $30)
        )
        (call $_ZdlPv
         (get_local $30)
        )
       )
       (block $label$48
        (br_if $label$48
         (i32.eqz
          (tee_local $30
           (i32.load
            (get_local $10)
           )
          )
         )
        )
        (i32.store
         (get_local $26)
         (get_local $30)
        )
        (call $_ZdlPv
         (get_local $30)
        )
       )
       (block $label$49
        (br_if $label$49
         (i32.eqz
          (tee_local $30
           (i32.load
            (get_local $12)
           )
          )
         )
        )
        (i32.store
         (get_local $20)
         (get_local $30)
        )
        (call $_ZdlPv
         (get_local $30)
        )
       )
       (block $label$50
        (br_if $label$50
         (i32.eqz
          (i32.and
           (i32.load8_u offset=32
            (get_local $33)
           )
           (i32.const 1)
          )
         )
        )
        (call $_ZdlPv
         (i32.load
          (get_local $19)
         )
        )
       )
       (set_local $27
        (i32.add
         (get_local $27)
         (i32.const 56)
        )
       )
       (br_if $label$19
        (i64.ne
         (tee_local $28
          (i64.add
           (get_local $28)
           (i64.const 1)
          )
         )
         (get_local $2)
        )
       )
      )
     )
     (drop
      (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
       (i32.add
        (get_local $33)
        (i32.const 128)
       )
      )
     )
     (block $label$51
      (br_if $label$51
       (i32.eqz
        (tee_local $18
         (i32.load offset=216
          (get_local $33)
         )
        )
       )
      )
      (block $label$52
       (block $label$53
        (br_if $label$53
         (i32.eq
          (tee_local $30
           (i32.load
            (tee_local $15
             (i32.add
              (get_local $33)
              (i32.const 220)
             )
            )
           )
          )
          (get_local $18)
         )
        )
        (loop $label$54
         (set_local $29
          (i32.load
           (tee_local $30
            (i32.add
             (get_local $30)
             (i32.const -24)
            )
           )
          )
         )
         (i32.store
          (get_local $30)
          (i32.const 0)
         )
         (block $label$55
          (br_if $label$55
           (i32.eqz
            (get_local $29)
           )
          )
          (call $_ZdlPv
           (get_local $29)
          )
         )
         (br_if $label$54
          (i32.ne
           (get_local $18)
           (get_local $30)
          )
         )
        )
        (set_local $30
         (i32.load
          (i32.add
           (get_local $33)
           (i32.const 216)
          )
         )
        )
        (br $label$52)
       )
       (set_local $30
        (get_local $18)
       )
      )
      (i32.store
       (get_local $15)
       (get_local $18)
      )
      (call $_ZdlPv
       (get_local $30)
      )
     )
     (i32.store offset=4
      (i32.const 0)
      (i32.add
       (get_local $33)
       (i32.const 272)
      )
     )
     (return)
    )
    (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
     (i32.add
      (get_local $33)
      (i32.const 176)
     )
    )
    (unreachable)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (i32.add
     (get_local $33)
     (i32.const 160)
    )
   )
   (unreachable)
  )
  (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
   (i32.add
    (get_local $33)
    (i32.const 144)
   )
  )
  (unreachable)
 )
 (func $_ZZN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE7emplaceIZNS1_6createEyyNSt3__16vectorINS5_12basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEENSA_ISC_EEEENS6_IyNSA_IyEEEESG_SG_SG_yE3$_3EENS3_14const_iteratorEyOT_ENKUlRSJ_E_clINS3_4itemEEEDaSL_ (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i32)
  (set_local $8
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $7)
  )
  (i64.store
   (get_local $1)
   (i64.load
    (i32.load
     (tee_local $3
      (i32.load offset=4
       (get_local $0)
      )
     )
    )
   )
  )
  (set_local $2
   (i32.load
    (get_local $0)
   )
  )
  (drop
   (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_
    (tee_local $5
     (i32.add
      (get_local $1)
      (i32.const 8)
     )
    )
    (tee_local $3
     (i32.load offset=4
      (get_local $3)
     )
    )
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.eq
     (get_local $5)
     (get_local $3)
    )
   )
   (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE6assignIPyEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIyNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_
    (i32.add
     (get_local $1)
     (i32.const 20)
    )
    (i32.load offset=12
     (get_local $3)
    )
    (i32.load
     (i32.add
      (get_local $3)
      (i32.const 16)
     )
    )
   )
   (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE6assignIPyEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIyNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_
    (i32.add
     (get_local $1)
     (i32.const 32)
    )
    (i32.load offset=24
     (get_local $3)
    )
    (i32.load
     (i32.add
      (get_local $3)
      (i32.const 28)
     )
    )
   )
   (call $_ZNSt3__16vectorIyNS_9allocatorIyEEE6assignIPyEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIyNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_
    (i32.add
     (get_local $1)
     (i32.const 44)
    )
    (i32.load offset=36
     (get_local $3)
    )
    (i32.load
     (i32.add
      (get_local $3)
      (i32.const 40)
     )
    )
   )
  )
  (i64.store
   (tee_local $4
    (i32.add
     (get_local $1)
     (i32.const 56)
    )
   )
   (i64.load offset=48
    (get_local $3)
   )
  )
  (i32.store
   (get_local $8)
   (i32.const 8)
  )
  (drop
   (call $_ZlsIN5eosio10datastreamIjEEERT_S4_RKN4repo4roleE
    (get_local $8)
    (get_local $5)
   )
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.lt_u
      (tee_local $5
       (i32.load
        (get_local $8)
       )
      )
      (i32.const 513)
     )
    )
    (set_local $3
     (call $malloc
      (get_local $5)
     )
    )
    (br $label$1)
   )
   (i32.store offset=4
    (i32.const 0)
    (tee_local $3
     (i32.sub
      (get_local $7)
      (i32.and
       (i32.add
        (get_local $5)
        (i32.const 15)
       )
       (i32.const -16)
      )
     )
    )
   )
  )
  (i32.store
   (get_local $8)
   (get_local $3)
  )
  (i32.store offset=8
   (get_local $8)
   (i32.add
    (get_local $3)
    (get_local $5)
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (get_local $5)
    (i32.const 7)
   )
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (get_local $3)
    (get_local $1)
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $8)
   (i32.add
    (get_local $3)
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (tee_local $7
       (call $_ZN5eosiolsINS_10datastreamIPcEEyEERT_S5_RKNSt3__16vectorIT0_NS6_9allocatorIS8_EEEE
        (call $_ZN5eosiolsINS_10datastreamIPcEEyEERT_S5_RKNSt3__16vectorIT0_NS6_9allocatorIS8_EEEE
         (call $_ZN5eosiolsINS_10datastreamIPcEEyEERT_S5_RKNSt3__16vectorIT0_NS6_9allocatorIS8_EEEE
          (call $_ZN5eosiolsINS_10datastreamIPcEEEERT_S5_RKNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEE
           (get_local $8)
           (i32.add
            (get_local $1)
            (i32.const 8)
           )
          )
          (i32.add
           (get_local $1)
           (i32.const 20)
          )
         )
         (i32.add
          (get_local $1)
          (i32.const 32)
         )
        )
        (i32.add
         (get_local $1)
         (i32.const 44)
        )
       )
      )
     )
     (i32.load offset=4
      (get_local $7)
     )
    )
    (i32.const 7)
   )
   (i32.const 208)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $7)
    )
    (get_local $4)
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $7)
   (i32.add
    (i32.load offset=4
     (get_local $7)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=68
   (get_local $1)
   (call $db_store_i64
    (i64.load offset=8
     (get_local $2)
    )
    (i64.const -4818099535333031936)
    (i64.load
     (i32.load offset=8
      (get_local $0)
     )
    )
    (tee_local $6
     (i64.load
      (get_local $1)
     )
    )
    (get_local $3)
    (get_local $5)
   )
  )
  (block $label$3
   (br_if $label$3
    (i32.lt_u
     (get_local $5)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $3)
   )
  )
  (block $label$4
   (br_if $label$4
    (i64.lt_u
     (get_local $6)
     (i64.load offset=16
      (get_local $2)
     )
    )
   )
   (i64.store
    (i32.add
     (get_local $2)
     (i32.const 16)
    )
    (select
     (i64.const -2)
     (i64.add
      (get_local $6)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $6)
      (i64.const -3)
     )
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 16)
   )
  )
 )
 (func $_ZNSt3__16vectorIyNS_9allocatorIyEEE21__push_back_slow_pathIyEEvOT_ (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (br_if $label$2
      (i32.ge_u
       (tee_local $7
        (i32.add
         (tee_local $3
          (i32.shr_s
           (i32.sub
            (tee_local $6
             (i32.load offset=4
              (get_local $0)
             )
            )
            (tee_local $5
             (i32.load
              (get_local $0)
             )
            )
           )
           (i32.const 3)
          )
         )
         (i32.const 1)
        )
       )
       (i32.const 536870912)
      )
     )
     (set_local $4
      (i32.const 536870911)
     )
     (block $label$3
      (block $label$4
       (br_if $label$4
        (i32.gt_u
         (i32.shr_s
          (tee_local $2
           (i32.sub
            (i32.load offset=8
             (get_local $0)
            )
            (get_local $5)
           )
          )
          (i32.const 3)
         )
         (i32.const 268435454)
        )
       )
       (br_if $label$3
        (i32.eqz
         (tee_local $4
          (select
           (get_local $7)
           (tee_local $4
            (i32.shr_s
             (get_local $2)
             (i32.const 2)
            )
           )
           (i32.lt_u
            (get_local $4)
            (get_local $7)
           )
          )
         )
        )
       )
       (br_if $label$1
        (i32.ge_u
         (get_local $4)
         (i32.const 536870912)
        )
       )
      )
      (set_local $7
       (call $_Znwj
        (i32.shl
         (get_local $4)
         (i32.const 3)
        )
       )
      )
      (set_local $6
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
      )
      (set_local $5
       (i32.load
        (get_local $0)
       )
      )
      (br $label$0)
     )
     (set_local $4
      (i32.const 0)
     )
     (set_local $7
      (i32.const 0)
     )
     (br $label$0)
    )
    (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
     (get_local $0)
    )
    (unreachable)
   )
   (call $abort)
   (unreachable)
  )
  (i64.store
   (tee_local $3
    (i32.add
     (get_local $7)
     (i32.shl
      (get_local $3)
      (i32.const 3)
     )
    )
   )
   (i64.load
    (get_local $1)
   )
  )
  (set_local $1
   (i32.sub
    (get_local $3)
    (tee_local $6
     (i32.sub
      (get_local $6)
      (get_local $5)
     )
    )
   )
  )
  (set_local $4
   (i32.add
    (get_local $7)
    (i32.shl
     (get_local $4)
     (i32.const 3)
    )
   )
  )
  (set_local $7
   (i32.add
    (get_local $3)
    (i32.const 8)
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.lt_s
     (get_local $6)
     (i32.const 1)
    )
   )
   (drop
    (call $memcpy
     (get_local $1)
     (get_local $5)
     (get_local $6)
    )
   )
   (set_local $5
    (i32.load
     (get_local $0)
    )
   )
  )
  (i32.store
   (get_local $0)
   (get_local $1)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (get_local $7)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (get_local $4)
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (get_local $5)
    )
   )
   (call $_ZdlPv
    (get_local $5)
   )
  )
 )
 (func $_ZNSt3__16vectorIyNS_9allocatorIyEEE6assignIPyEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIyNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_ (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.le_u
        (tee_local $4
         (i32.shr_s
          (tee_local $3
           (i32.sub
            (get_local $2)
            (get_local $1)
           )
          )
          (i32.const 3)
         )
        )
        (i32.shr_s
         (i32.sub
          (tee_local $8
           (i32.load offset=8
            (get_local $0)
           )
          )
          (tee_local $5
           (i32.load
            (get_local $0)
           )
          )
         )
         (i32.const 3)
        )
       )
      )
      (block $label$4
       (br_if $label$4
        (i32.eqz
         (get_local $5)
        )
       )
       (i32.store offset=4
        (get_local $0)
        (get_local $5)
       )
       (call $_ZdlPv
        (get_local $5)
       )
       (set_local $8
        (i32.const 0)
       )
       (i32.store
        (i32.add
         (get_local $0)
         (i32.const 8)
        )
        (i32.const 0)
       )
       (i64.store align=4
        (get_local $0)
        (i64.const 0)
       )
      )
      (br_if $label$0
       (i32.ge_u
        (get_local $4)
        (i32.const 536870912)
       )
      )
      (set_local $5
       (i32.const 536870911)
      )
      (block $label$5
       (br_if $label$5
        (i32.gt_u
         (i32.shr_s
          (get_local $8)
          (i32.const 3)
         )
         (i32.const 268435454)
        )
       )
       (set_local $5
        (get_local $4)
       )
       (br_if $label$5
        (i32.lt_u
         (tee_local $2
          (i32.shr_s
           (get_local $8)
           (i32.const 2)
          )
         )
         (get_local $4)
        )
       )
       (set_local $5
        (get_local $2)
       )
       (br_if $label$0
        (i32.ge_u
         (get_local $2)
         (i32.const 536870912)
        )
       )
      )
      (i32.store
       (get_local $0)
       (tee_local $5
        (call $_Znwj
         (tee_local $4
          (i32.shl
           (get_local $5)
           (i32.const 3)
          )
         )
        )
       )
      )
      (i32.store offset=4
       (get_local $0)
       (get_local $5)
      )
      (i32.store
       (i32.add
        (get_local $0)
        (i32.const 8)
       )
       (i32.add
        (get_local $5)
        (get_local $4)
       )
      )
      (br_if $label$2
       (i32.lt_s
        (get_local $3)
        (i32.const 1)
       )
      )
      (drop
       (call $memcpy
        (get_local $5)
        (get_local $1)
        (get_local $3)
       )
      )
      (i32.store
       (tee_local $0
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
       (i32.add
        (i32.load
         (get_local $0)
        )
        (get_local $3)
       )
      )
      (return)
     )
     (block $label$6
      (br_if $label$6
       (i32.eqz
        (tee_local $7
         (i32.shr_s
          (tee_local $6
           (i32.sub
            (tee_local $8
             (select
              (i32.add
               (get_local $1)
               (tee_local $3
                (i32.sub
                 (i32.load offset=4
                  (get_local $0)
                 )
                 (get_local $5)
                )
               )
              )
              (get_local $2)
              (i32.gt_u
               (get_local $4)
               (tee_local $3
                (i32.shr_s
                 (get_local $3)
                 (i32.const 3)
                )
               )
              )
             )
            )
            (get_local $1)
           )
          )
          (i32.const 3)
         )
        )
       )
      )
      (drop
       (call $memmove
        (get_local $5)
        (get_local $1)
        (get_local $6)
       )
      )
     )
     (br_if $label$1
      (i32.le_u
       (get_local $4)
       (get_local $3)
      )
     )
     (br_if $label$2
      (i32.lt_s
       (tee_local $1
        (i32.sub
         (get_local $2)
         (get_local $8)
        )
       )
       (i32.const 1)
      )
     )
     (drop
      (call $memcpy
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const 4)
         )
        )
       )
       (get_local $8)
       (get_local $1)
      )
     )
     (i32.store
      (get_local $0)
      (i32.add
       (i32.load
        (get_local $0)
       )
       (get_local $1)
      )
     )
     (return)
    )
    (return)
   )
   (i32.store
    (i32.add
     (get_local $0)
     (i32.const 4)
    )
    (i32.add
     (get_local $5)
     (i32.shl
      (get_local $7)
      (i32.const 3)
     )
    )
   )
   (return)
  )
  (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
   (get_local $0)
  )
  (unreachable)
 )
 (func $_ZlsIN5eosio10datastreamIjEEERT_S4_RKN4repo4roleE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (set_local $5
   (i64.extend_u/i32
    (select
     (i32.load offset=4
      (get_local $1)
     )
     (i32.shr_u
      (tee_local $6
       (i32.load8_u
        (get_local $1)
       )
      )
      (i32.const 1)
     )
     (i32.and
      (get_local $6)
      (i32.const 1)
     )
    )
   )
  )
  (set_local $6
   (i32.load
    (get_local $0)
   )
  )
  (loop $label$0
   (set_local $6
    (i32.add
     (get_local $6)
     (i32.const 1)
    )
   )
   (br_if $label$0
    (i64.ne
     (tee_local $5
      (i64.shr_u
       (get_local $5)
       (i64.const 7)
      )
     )
     (i64.const 0)
    )
   )
  )
  (i32.store
   (get_local $0)
   (get_local $6)
  )
  (block $label$1
   (br_if $label$1
    (i32.eqz
     (tee_local $3
      (select
       (i32.load
        (i32.add
         (get_local $1)
         (i32.const 4)
        )
       )
       (i32.shr_u
        (tee_local $3
         (i32.load8_u
          (get_local $1)
         )
        )
        (i32.const 1)
       )
       (i32.and
        (get_local $3)
        (i32.const 1)
       )
      )
     )
    )
   )
   (i32.store
    (get_local $0)
    (tee_local $6
     (i32.add
      (get_local $3)
      (get_local $6)
     )
    )
   )
  )
  (set_local $5
   (i64.extend_u/i32
    (i32.shr_s
     (tee_local $4
      (i32.sub
       (tee_local $3
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 16)
         )
        )
       )
       (tee_local $2
        (i32.load offset=12
         (get_local $1)
        )
       )
      )
     )
     (i32.const 3)
    )
   )
  )
  (loop $label$2
   (set_local $6
    (i32.add
     (get_local $6)
     (i32.const 1)
    )
   )
   (br_if $label$2
    (i64.ne
     (tee_local $5
      (i64.shr_u
       (get_local $5)
       (i64.const 7)
      )
     )
     (i64.const 0)
    )
   )
  )
  (block $label$3
   (br_if $label$3
    (i32.eq
     (get_local $2)
     (get_local $3)
    )
   )
   (set_local $6
    (i32.add
     (i32.and
      (get_local $4)
      (i32.const -8)
     )
     (get_local $6)
    )
   )
  )
  (i32.store
   (get_local $0)
   (get_local $6)
  )
  (set_local $5
   (i64.extend_u/i32
    (i32.shr_s
     (tee_local $4
      (i32.sub
       (tee_local $3
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 28)
         )
        )
       )
       (tee_local $2
        (i32.load offset=24
         (get_local $1)
        )
       )
      )
     )
     (i32.const 3)
    )
   )
  )
  (loop $label$4
   (set_local $6
    (i32.add
     (get_local $6)
     (i32.const 1)
    )
   )
   (br_if $label$4
    (i64.ne
     (tee_local $5
      (i64.shr_u
       (get_local $5)
       (i64.const 7)
      )
     )
     (i64.const 0)
    )
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.eq
     (get_local $2)
     (get_local $3)
    )
   )
   (set_local $6
    (i32.add
     (i32.and
      (get_local $4)
      (i32.const -8)
     )
     (get_local $6)
    )
   )
  )
  (i32.store
   (get_local $0)
   (get_local $6)
  )
  (set_local $5
   (i64.extend_u/i32
    (i32.shr_s
     (tee_local $2
      (i32.sub
       (tee_local $3
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 40)
         )
        )
       )
       (tee_local $1
        (i32.load offset=36
         (get_local $1)
        )
       )
      )
     )
     (i32.const 3)
    )
   )
  )
  (loop $label$6
   (set_local $6
    (i32.add
     (get_local $6)
     (i32.const 1)
    )
   )
   (br_if $label$6
    (i64.ne
     (tee_local $5
      (i64.shr_u
       (get_local $5)
       (i64.const 7)
      )
     )
     (i64.const 0)
    )
   )
  )
  (block $label$7
   (br_if $label$7
    (i32.eq
     (get_local $1)
     (get_local $3)
    )
   )
   (set_local $6
    (i32.add
     (i32.and
      (get_local $2)
      (i32.const -8)
     )
     (get_local $6)
    )
   )
  )
  (i32.store
   (get_local $0)
   (i32.add
    (get_local $6)
    (i32.const 8)
   )
  )
  (get_local $0)
 )
 (func $_ZN5eosiolsINS_10datastreamIPcEEEERT_S5_RKNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i64)
  (local $8 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $8
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (set_local $7
   (i64.extend_u/i32
    (select
     (i32.load offset=4
      (get_local $1)
     )
     (i32.shr_u
      (tee_local $5
       (i32.load8_u
        (get_local $1)
       )
      )
      (i32.const 1)
     )
     (i32.and
      (get_local $5)
      (i32.const 1)
     )
    )
   )
  )
  (set_local $6
   (i32.load offset=4
    (get_local $0)
   )
  )
  (set_local $4
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
  )
  (set_local $5
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
  )
  (loop $label$0
   (set_local $2
    (i32.wrap/i64
     (get_local $7)
    )
   )
   (i32.store8 offset=15
    (get_local $8)
    (i32.or
     (i32.shl
      (tee_local $3
       (i64.ne
        (tee_local $7
         (i64.shr_u
          (get_local $7)
          (i64.const 7)
         )
        )
        (i64.const 0)
       )
      )
      (i32.const 7)
     )
     (i32.and
      (get_local $2)
      (i32.const 127)
     )
    )
   )
   (call $eosio_assert
    (i32.gt_s
     (i32.sub
      (i32.load
       (get_local $4)
      )
      (get_local $6)
     )
     (i32.const 0)
    )
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.load
      (get_local $5)
     )
     (i32.add
      (get_local $8)
      (i32.const 15)
     )
     (i32.const 1)
    )
   )
   (i32.store
    (get_local $5)
    (tee_local $6
     (i32.add
      (i32.load
       (get_local $5)
      )
      (i32.const 1)
     )
    )
   )
   (br_if $label$0
    (get_local $3)
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.eqz
     (tee_local $5
      (select
       (i32.load
        (i32.add
         (get_local $1)
         (i32.const 4)
        )
       )
       (i32.shr_u
        (tee_local $5
         (i32.load8_u
          (get_local $1)
         )
        )
        (i32.const 1)
       )
       (tee_local $2
        (i32.and
         (get_local $5)
         (i32.const 1)
        )
       )
      )
     )
    )
   )
   (set_local $3
    (i32.load offset=8
     (get_local $1)
    )
   )
   (call $eosio_assert
    (i32.ge_s
     (i32.sub
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 8)
       )
      )
      (get_local $6)
     )
     (get_local $5)
    )
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.load
      (tee_local $6
       (i32.add
        (get_local $0)
        (i32.const 4)
       )
      )
     )
     (select
      (get_local $3)
      (i32.add
       (get_local $1)
       (i32.const 1)
      )
      (get_local $2)
     )
     (get_local $5)
    )
   )
   (i32.store
    (get_local $6)
    (i32.add
     (i32.load
      (get_local $6)
     )
     (get_local $5)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 16)
   )
  )
  (get_local $0)
 )
 (func $_ZN4repo7shitoutEh (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $6)
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=16
   (get_local $6)
   (i64.const -1)
  )
  (i64.store
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=8
   (get_local $6)
   (get_local $4)
  )
  (i64.store offset=24
   (get_local $6)
   (i64.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $0
      (call $db_lowerbound_i64
       (get_local $4)
       (get_local $4)
       (i64.const -7876113394178195456)
       (i64.const 0)
      )
     )
     (i32.const 0)
    )
   )
   (set_local $0
    (call $_ZNK5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE31load_object_by_primary_iteratorEl
     (get_local $6)
     (get_local $0)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 224)
   )
   (br_if $label$0
    (i32.lt_s
     (tee_local $0
      (call $db_next_i64
       (i32.load offset=36
        (get_local $0)
       )
       (i32.add
        (get_local $6)
        (i32.const 40)
       )
      )
     )
     (i32.const 0)
    )
   )
   (loop $label$1
    (set_local $0
     (call $_ZNK5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE31load_object_by_primary_iteratorEl
      (get_local $6)
      (get_local $0)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 224)
    )
    (br_if $label$1
     (i32.ge_s
      (tee_local $0
       (call $db_next_i64
        (i32.load offset=36
         (get_local $0)
        )
        (i32.add
         (get_local $6)
         (i32.const 40)
        )
       )
      )
      (i32.const 0)
     )
    )
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (tee_local $2
      (i32.load offset=24
       (get_local $6)
      )
     )
    )
   )
   (block $label$3
    (block $label$4
     (br_if $label$4
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $6)
           (i32.const 28)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$5
      (set_local $3
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$6
       (br_if $label$6
        (i32.eqz
         (get_local $3)
        )
       )
       (call $_ZdlPv
        (get_local $3)
       )
      )
      (br_if $label$5
       (i32.ne
        (get_local $2)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 24)
       )
      )
     )
     (br $label$3)
    )
    (set_local $0
     (get_local $2)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
 )
 (func $_ZN4repo8helpcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy (param $0 i32) (param $1 i32) (param $2 i64) (result i64)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i64)
  (local $10 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 64)
    )
   )
  )
  (drop
   (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
    (i32.add
     (get_local $10)
     (i32.const 48)
    )
    (get_local $1)
   )
  )
  (call $_ZN4repo11assert_roleENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEb
   (get_local $0)
   (i32.add
    (get_local $10)
    (i32.const 48)
   )
   (i32.const 1)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (i32.and
      (i32.load8_u offset=48
       (get_local $10)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load offset=56
     (get_local $10)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $10)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $10)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $10)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $10)
   (tee_local $7
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $10)
   (get_local $7)
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.and
      (i32.load8_u
       (get_local $1)
      )
      (i32.const 1)
     )
    )
    (set_local $1
     (i32.add
      (get_local $1)
      (i32.const 1)
     )
    )
    (br $label$1)
   )
   (set_local $1
    (i32.load offset=8
     (get_local $1)
    )
   )
  )
  (set_local $0
   (i32.const -1)
  )
  (loop $label$3
   (set_local $5
    (i32.add
     (get_local $1)
     (get_local $0)
    )
   )
   (set_local $0
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 1)
     )
    )
   )
   (br_if $label$3
    (i32.load8_u
     (i32.add
      (get_local $5)
      (i32.const 1)
     )
    )
   )
  )
  (set_local $4
   (i64.extend_u/i32
    (get_local $3)
   )
  )
  (set_local $7
   (i64.const 0)
  )
  (set_local $6
   (i64.const 59)
  )
  (set_local $8
   (i64.const 0)
  )
  (loop $label$4
   (set_local $9
    (i64.const 0)
   )
   (block $label$5
    (br_if $label$5
     (i64.ge_u
      (get_local $7)
      (get_local $4)
     )
    )
    (block $label$6
     (block $label$7
      (br_if $label$7
       (i32.gt_u
        (i32.and
         (i32.add
          (tee_local $0
           (i32.load8_s
            (get_local $1)
           )
          )
          (i32.const -97)
         )
         (i32.const 255)
        )
        (i32.const 25)
       )
      )
      (set_local $0
       (i32.add
        (get_local $0)
        (i32.const 165)
       )
      )
      (br $label$6)
     )
     (set_local $0
      (select
       (i32.add
        (get_local $0)
        (i32.const 208)
       )
       (i32.const 0)
       (i32.lt_u
        (i32.and
         (i32.add
          (get_local $0)
          (i32.const -49)
         )
         (i32.const 255)
        )
        (i32.const 5)
       )
      )
     )
    )
    (set_local $9
     (i64.shr_s
      (i64.shl
       (i64.extend_u/i32
        (get_local $0)
       )
       (i64.const 56)
      )
      (i64.const 56)
     )
    )
   )
   (block $label$8
    (block $label$9
     (br_if $label$9
      (i64.gt_u
       (get_local $7)
       (i64.const 11)
      )
     )
     (set_local $9
      (i64.shl
       (i64.and
        (get_local $9)
        (i64.const 31)
       )
       (i64.and
        (get_local $6)
        (i64.const 4294967295)
       )
      )
     )
     (br $label$8)
    )
    (set_local $9
     (i64.and
      (get_local $9)
      (i64.const 15)
     )
    )
   )
   (set_local $1
    (i32.add
     (get_local $1)
     (i32.const 1)
    )
   )
   (set_local $7
    (i64.add
     (get_local $7)
     (i64.const 1)
    )
   )
   (set_local $8
    (i64.or
     (get_local $9)
     (get_local $8)
    )
   )
   (br_if $label$4
    (i64.ne
     (tee_local $6
      (i64.add
       (get_local $6)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (set_local $7
   (i64.load
    (i32.add
     (i32.load
      (i32.add
       (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE3getEyPKc
        (i32.add
         (get_local $10)
         (i32.const 8)
        )
        (get_local $8)
        (i32.const 1184)
       )
       (i32.const 32)
      )
     )
     (i32.shl
      (i32.wrap/i64
       (get_local $2)
      )
      (i32.const 3)
     )
    )
   )
  )
  (drop
   (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
    (i32.add
     (get_local $10)
     (i32.const 32)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 64)
   )
  )
  (get_local $7)
 )
 (func $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE3getEyPKc (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (br_if $label$0
    (i32.eq
     (tee_local $7
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 28)
       )
      )
     )
     (tee_local $3
      (i32.load offset=24
       (get_local $0)
      )
     )
    )
   )
   (set_local $6
    (i32.add
     (get_local $7)
     (i32.const -24)
    )
   )
   (set_local $4
    (i32.sub
     (i32.const 0)
     (get_local $3)
    )
   )
   (loop $label$1
    (br_if $label$0
     (i64.eq
      (i64.load
       (i32.load
        (get_local $6)
       )
      )
      (get_local $1)
     )
    )
    (set_local $7
     (get_local $6)
    )
    (set_local $6
     (tee_local $5
      (i32.add
       (get_local $6)
       (i32.const -24)
      )
     )
    )
    (br_if $label$1
     (i32.ne
      (i32.add
       (get_local $5)
       (get_local $4)
      )
      (i32.const -24)
     )
    )
   )
  )
  (block $label$2
   (block $label$3
    (br_if $label$3
     (i32.eq
      (get_local $7)
      (get_local $3)
     )
    )
    (call $eosio_assert
     (i32.eq
      (i32.load offset=64
       (tee_local $6
        (i32.load
         (i32.add
          (get_local $7)
          (i32.const -24)
         )
        )
       )
      )
      (get_local $0)
     )
     (i32.const 320)
    )
    (br $label$2)
   )
   (set_local $6
    (i32.const 0)
   )
   (br_if $label$2
    (i32.lt_s
     (tee_local $5
      (call $db_find_i64
       (i64.load
        (get_local $0)
       )
       (i64.load offset=8
        (get_local $0)
       )
       (i64.const -4818099535333031936)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=64
      (tee_local $6
       (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
        (get_local $0)
        (get_local $5)
       )
      )
     )
     (get_local $0)
    )
    (i32.const 320)
   )
  )
  (call $eosio_assert
   (i32.ne
    (get_local $6)
    (i32.const 0)
   )
   (get_local $2)
  )
  (get_local $6)
 )
 (func $_ZN4repo7getcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i64)
  (local $4 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $4
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (drop
   (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
    (get_local $4)
    (get_local $1)
   )
  )
  (set_local $3
   (call $_ZN4repo8helpcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy
    (get_local $0)
    (get_local $4)
    (get_local $2)
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (i32.and
      (i32.load8_u
       (get_local $4)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load offset=8
     (get_local $4)
    )
   )
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.and
      (i32.load8_u
       (get_local $1)
      )
      (i32.const 1)
     )
    )
    (set_local $1
     (i32.add
      (get_local $1)
      (i32.const 1)
     )
    )
    (br $label$1)
   )
   (set_local $1
    (i32.load offset=8
     (get_local $1)
    )
   )
  )
  (call $prints
   (i32.const 1216)
  )
  (call $prints
   (get_local $1)
  )
  (call $prints
   (i32.const 1232)
  )
  (call $printui
   (i64.and
    (get_local $2)
    (i64.const 4294967295)
   )
  )
  (call $prints
   (i32.const 1248)
  )
  (call $printui
   (get_local $3)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $4)
    (i32.const 16)
   )
  )
 )
 (func $_ZN4repo7helprepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy (param $0 i32) (param $1 i32) (param $2 i64) (result i64)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i64)
  (local $10 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 64)
    )
   )
  )
  (drop
   (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
    (i32.add
     (get_local $10)
     (i32.const 48)
    )
    (get_local $1)
   )
  )
  (call $_ZN4repo11assert_roleENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEb
   (get_local $0)
   (i32.add
    (get_local $10)
    (i32.const 48)
   )
   (i32.const 1)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (i32.and
      (i32.load8_u offset=48
       (get_local $10)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load offset=56
     (get_local $10)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $10)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $10)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $10)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $10)
   (tee_local $7
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $10)
   (get_local $7)
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.and
      (i32.load8_u
       (get_local $1)
      )
      (i32.const 1)
     )
    )
    (set_local $1
     (i32.add
      (get_local $1)
      (i32.const 1)
     )
    )
    (br $label$1)
   )
   (set_local $1
    (i32.load offset=8
     (get_local $1)
    )
   )
  )
  (set_local $0
   (i32.const -1)
  )
  (loop $label$3
   (set_local $5
    (i32.add
     (get_local $1)
     (get_local $0)
    )
   )
   (set_local $0
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 1)
     )
    )
   )
   (br_if $label$3
    (i32.load8_u
     (i32.add
      (get_local $5)
      (i32.const 1)
     )
    )
   )
  )
  (set_local $4
   (i64.extend_u/i32
    (get_local $3)
   )
  )
  (set_local $7
   (i64.const 0)
  )
  (set_local $6
   (i64.const 59)
  )
  (set_local $8
   (i64.const 0)
  )
  (loop $label$4
   (set_local $9
    (i64.const 0)
   )
   (block $label$5
    (br_if $label$5
     (i64.ge_u
      (get_local $7)
      (get_local $4)
     )
    )
    (block $label$6
     (block $label$7
      (br_if $label$7
       (i32.gt_u
        (i32.and
         (i32.add
          (tee_local $0
           (i32.load8_s
            (get_local $1)
           )
          )
          (i32.const -97)
         )
         (i32.const 255)
        )
        (i32.const 25)
       )
      )
      (set_local $0
       (i32.add
        (get_local $0)
        (i32.const 165)
       )
      )
      (br $label$6)
     )
     (set_local $0
      (select
       (i32.add
        (get_local $0)
        (i32.const 208)
       )
       (i32.const 0)
       (i32.lt_u
        (i32.and
         (i32.add
          (get_local $0)
          (i32.const -49)
         )
         (i32.const 255)
        )
        (i32.const 5)
       )
      )
     )
    )
    (set_local $9
     (i64.shr_s
      (i64.shl
       (i64.extend_u/i32
        (get_local $0)
       )
       (i64.const 56)
      )
      (i64.const 56)
     )
    )
   )
   (block $label$8
    (block $label$9
     (br_if $label$9
      (i64.gt_u
       (get_local $7)
       (i64.const 11)
      )
     )
     (set_local $9
      (i64.shl
       (i64.and
        (get_local $9)
        (i64.const 31)
       )
       (i64.and
        (get_local $6)
        (i64.const 4294967295)
       )
      )
     )
     (br $label$8)
    )
    (set_local $9
     (i64.and
      (get_local $9)
      (i64.const 15)
     )
    )
   )
   (set_local $1
    (i32.add
     (get_local $1)
     (i32.const 1)
    )
   )
   (set_local $7
    (i64.add
     (get_local $7)
     (i64.const 1)
    )
   )
   (set_local $8
    (i64.or
     (get_local $9)
     (get_local $8)
    )
   )
   (br_if $label$4
    (i64.ne
     (tee_local $6
      (i64.add
       (get_local $6)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (set_local $7
   (i64.load
    (i32.add
     (i32.load
      (i32.add
       (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE3getEyPKc
        (i32.add
         (get_local $10)
         (i32.const 8)
        )
        (get_local $8)
        (i32.const 1184)
       )
       (i32.const 44)
      )
     )
     (i32.shl
      (i32.wrap/i64
       (get_local $2)
      )
      (i32.const 3)
     )
    )
   )
  )
  (drop
   (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
    (i32.add
     (get_local $10)
     (i32.const 32)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 64)
   )
  )
  (get_local $7)
 )
 (func $_ZN4repo6getrepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i64)
  (local $4 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $4
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (drop
   (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
    (get_local $4)
    (get_local $1)
   )
  )
  (set_local $3
   (call $_ZN4repo7helprepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy
    (get_local $0)
    (get_local $4)
    (get_local $2)
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (i32.and
      (i32.load8_u
       (get_local $4)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load offset=8
     (get_local $4)
    )
   )
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.and
      (i32.load8_u
       (get_local $1)
      )
      (i32.const 1)
     )
    )
    (set_local $1
     (i32.add
      (get_local $1)
      (i32.const 1)
     )
    )
    (br $label$1)
   )
   (set_local $1
    (i32.load offset=8
     (get_local $1)
    )
   )
  )
  (call $prints
   (i32.const 1216)
  )
  (call $prints
   (get_local $1)
  )
  (call $prints
   (i32.const 1232)
  )
  (call $printui
   (i64.and
    (get_local $2)
    (i64.const 4294967295)
   )
  )
  (call $prints
   (i32.const 1280)
  )
  (call $printui
   (get_local $3)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $4)
    (i32.const 16)
   )
  )
 )
 (func $_ZN4repo6canactENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i64)
  (local $10 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 64)
    )
   )
  )
  (drop
   (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
    (i32.add
     (get_local $10)
     (i32.const 48)
    )
    (get_local $1)
   )
  )
  (call $_ZN4repo11assert_roleENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEb
   (get_local $0)
   (i32.add
    (get_local $10)
    (i32.const 48)
   )
   (i32.const 1)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (i32.and
      (i32.load8_u offset=48
       (get_local $10)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load offset=56
     (get_local $10)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $10)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $10)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $10)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $10)
   (tee_local $7
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $10)
   (get_local $7)
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.and
      (i32.load8_u
       (get_local $1)
      )
      (i32.const 1)
     )
    )
    (set_local $1
     (i32.add
      (get_local $1)
      (i32.const 1)
     )
    )
    (br $label$1)
   )
   (set_local $1
    (i32.load offset=8
     (get_local $1)
    )
   )
  )
  (set_local $0
   (i32.const -1)
  )
  (loop $label$3
   (set_local $5
    (i32.add
     (get_local $1)
     (get_local $0)
    )
   )
   (set_local $0
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 1)
     )
    )
   )
   (br_if $label$3
    (i32.load8_u
     (i32.add
      (get_local $5)
      (i32.const 1)
     )
    )
   )
  )
  (set_local $4
   (i64.extend_u/i32
    (get_local $3)
   )
  )
  (set_local $7
   (i64.const 0)
  )
  (set_local $6
   (i64.const 59)
  )
  (set_local $8
   (i64.const 0)
  )
  (loop $label$4
   (set_local $9
    (i64.const 0)
   )
   (block $label$5
    (br_if $label$5
     (i64.ge_u
      (get_local $7)
      (get_local $4)
     )
    )
    (block $label$6
     (block $label$7
      (br_if $label$7
       (i32.gt_u
        (i32.and
         (i32.add
          (tee_local $0
           (i32.load8_s
            (get_local $1)
           )
          )
          (i32.const -97)
         )
         (i32.const 255)
        )
        (i32.const 25)
       )
      )
      (set_local $0
       (i32.add
        (get_local $0)
        (i32.const 165)
       )
      )
      (br $label$6)
     )
     (set_local $0
      (select
       (i32.add
        (get_local $0)
        (i32.const 208)
       )
       (i32.const 0)
       (i32.lt_u
        (i32.and
         (i32.add
          (get_local $0)
          (i32.const -49)
         )
         (i32.const 255)
        )
        (i32.const 5)
       )
      )
     )
    )
    (set_local $9
     (i64.shr_s
      (i64.shl
       (i64.extend_u/i32
        (get_local $0)
       )
       (i64.const 56)
      )
      (i64.const 56)
     )
    )
   )
   (block $label$8
    (block $label$9
     (br_if $label$9
      (i64.gt_u
       (get_local $7)
       (i64.const 11)
      )
     )
     (set_local $9
      (i64.shl
       (i64.and
        (get_local $9)
        (i64.const 31)
       )
       (i64.and
        (get_local $6)
        (i64.const 4294967295)
       )
      )
     )
     (br $label$8)
    )
    (set_local $9
     (i64.and
      (get_local $9)
      (i64.const 15)
     )
    )
   )
   (set_local $1
    (i32.add
     (get_local $1)
     (i32.const 1)
    )
   )
   (set_local $7
    (i64.add
     (get_local $7)
     (i64.const 1)
    )
   )
   (set_local $8
    (i64.or
     (get_local $9)
     (get_local $8)
    )
   )
   (br_if $label$4
    (i64.ne
     (tee_local $6
      (i64.add
       (get_local $6)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (call $eosio_assert
   (i64.eq
    (i64.load
     (i32.add
      (i32.load
       (i32.add
        (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE3getEyPKc
         (i32.add
          (get_local $10)
          (i32.const 8)
         )
         (get_local $8)
         (i32.const 1184)
        )
        (i32.const 20)
       )
      )
      (i32.shl
       (i32.wrap/i64
        (get_local $2)
       )
       (i32.const 3)
      )
     )
    )
    (i64.const 1)
   )
   (i32.const 1296)
  )
  (drop
   (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
    (i32.add
     (get_local $10)
     (i32.const 32)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 64)
   )
  )
 )
 (func $_ZN4repo8findroleEy (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 64)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $7)
    (i32.const 56)
   )
   (i32.const 0)
  )
  (i64.store offset=40
   (get_local $7)
   (i64.const -1)
  )
  (i64.store offset=48
   (get_local $7)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $7)
   (tee_local $3
    (i64.load
     (get_local $1)
    )
   )
  )
  (i64.store offset=32
   (get_local $7)
   (get_local $3)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (i32.const 0)
  )
  (i64.store align=4
   (get_local $0)
   (i64.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.ge_u
     (tee_local $1
      (call $strlen
       (i32.const 304)
      )
     )
     (i32.const -16)
    )
   )
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.ge_u
        (get_local $1)
        (i32.const 11)
       )
      )
      (i32.store8
       (get_local $0)
       (i32.shl
        (get_local $1)
        (i32.const 1)
       )
      )
      (set_local $5
       (i32.add
        (get_local $0)
        (i32.const 1)
       )
      )
      (br_if $label$2
       (get_local $1)
      )
      (br $label$1)
     )
     (set_local $5
      (call $_Znwj
       (tee_local $4
        (i32.and
         (i32.add
          (get_local $1)
          (i32.const 16)
         )
         (i32.const -16)
        )
       )
      )
     )
     (i32.store
      (get_local $0)
      (i32.or
       (get_local $4)
       (i32.const 1)
      )
     )
     (i32.store offset=8
      (get_local $0)
      (get_local $5)
     )
     (i32.store offset=4
      (get_local $0)
      (get_local $1)
     )
    )
    (drop
     (call $memcpy
      (get_local $5)
      (i32.const 304)
      (get_local $1)
     )
    )
   )
   (i32.store8
    (i32.add
     (get_local $5)
     (get_local $1)
    )
    (i32.const 0)
   )
   (set_local $6
    (i64.const 0)
   )
   (block $label$4
    (br_if $label$4
     (i32.lt_s
      (tee_local $1
       (call $db_lowerbound_i64
        (i64.load offset=24
         (get_local $7)
        )
        (i64.load
         (i32.add
          (i32.add
           (get_local $7)
           (i32.const 24)
          )
          (i32.const 8)
         )
        )
        (i64.const -4818099535333031936)
        (i64.const 0)
       )
      )
      (i32.const 0)
     )
    )
    (set_local $1
     (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
      (i32.add
       (get_local $7)
       (i32.const 24)
      )
      (get_local $1)
     )
    )
    (loop $label$5
     (drop
      (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
       (i32.add
        (get_local $7)
        (i32.const 8)
       )
       (i32.add
        (get_local $1)
        (i32.const 8)
       )
      )
     )
     (block $label$6
      (br_if $label$6
       (i64.gt_u
        (tee_local $3
         (i64.load
          (i32.add
           (get_local $1)
           (i32.const 56)
          )
         )
        )
        (get_local $2)
       )
      )
      (br_if $label$6
       (i64.lt_u
        (get_local $3)
        (get_local $6)
       )
      )
      (drop
       (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_
        (get_local $0)
        (i32.add
         (get_local $7)
         (i32.const 8)
        )
       )
      )
      (set_local $6
       (get_local $3)
      )
     )
     (block $label$7
      (br_if $label$7
       (i32.eqz
        (i32.and
         (i32.load8_u offset=8
          (get_local $7)
         )
         (i32.const 1)
        )
       )
      )
      (call $_ZdlPv
       (i32.load
        (i32.add
         (i32.add
          (get_local $7)
          (i32.const 8)
         )
         (i32.const 8)
        )
       )
      )
     )
     (call $eosio_assert
      (i32.const 1)
      (i32.const 224)
     )
     (br_if $label$4
      (i32.le_s
       (tee_local $1
        (call $db_next_i64
         (i32.load offset=68
          (get_local $1)
         )
         (i32.add
          (get_local $7)
          (i32.const 8)
         )
        )
       )
       (i32.const -1)
      )
     )
     (set_local $1
      (call $_ZNK5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE31load_object_by_primary_iteratorEl
       (i32.add
        (get_local $7)
        (i32.const 24)
       )
       (get_local $1)
      )
     )
     (br $label$5)
    )
   )
   (block $label$8
    (br_if $label$8
     (i32.ne
      (tee_local $5
       (call $strlen
        (i32.const 304)
       )
      )
      (select
       (i32.load offset=4
        (get_local $0)
       )
       (i32.shr_u
        (tee_local $1
         (i32.load8_u
          (get_local $0)
         )
        )
        (i32.const 1)
       )
       (i32.and
        (get_local $1)
        (i32.const 1)
       )
      )
     )
    )
    (br_if $label$8
     (call $_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj
      (get_local $0)
      (i32.const 0)
      (i32.const -1)
      (i32.const 304)
      (get_local $5)
     )
    )
    (call $eosio_assert
     (i32.const 0)
     (i32.const 1344)
    )
   )
   (drop
    (call $_ZNSt3__113__vector_baseIN5eosio11multi_indexILy13628644538376519680EN4repo5rolesEJEE8item_ptrENS_9allocatorIS6_EEED2Ev
     (i32.add
      (get_local $7)
      (i32.const 48)
     )
    )
   )
   (i32.store offset=4
    (i32.const 0)
    (i32.add
     (get_local $7)
     (i32.const 64)
    )
   )
   (return)
  )
  (call $_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv
   (get_local $0)
  )
  (unreachable)
 )
 (func $_ZN4repo7getroleEy (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 64)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $6)
    (i32.const 56)
   )
   (i32.const 0)
  )
  (i64.store offset=40
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=48
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $6)
   (tee_local $3
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=32
   (get_local $6)
   (get_local $3)
  )
  (set_local $5
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $2
      (call $db_find_i64
       (get_local $3)
       (get_local $3)
       (i64.const -4995709579134965888)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=32
      (tee_local $5
       (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $6)
         (i32.const 24)
        )
        (get_local $2)
       )
      )
     )
     (i32.add
      (get_local $6)
      (i32.const 24)
     )
    )
    (i32.const 320)
   )
  )
  (call $eosio_assert
   (i32.ne
    (get_local $5)
    (i32.const 0)
   )
   (i32.const 1408)
  )
  (call $_ZN4repo8findroleEy
   (i32.add
    (get_local $6)
    (i32.const 8)
   )
   (get_local $0)
   (i64.load offset=8
    (get_local $5)
   )
  )
  (call $prints
   (i32.const 1456)
  )
  (call $printn
   (get_local $1)
  )
  (call $prints
   (i32.const 1472)
  )
  (call $prints
   (i32.const 1488)
  )
  (call $prints_l
   (select
    (i32.load offset=16
     (get_local $6)
    )
    (i32.or
     (i32.add
      (get_local $6)
      (i32.const 8)
     )
     (i32.const 1)
    )
    (tee_local $0
     (i32.and
      (tee_local $5
       (i32.load8_u offset=8
        (get_local $6)
       )
      )
      (i32.const 1)
     )
    )
   )
   (select
    (i32.load offset=12
     (get_local $6)
    )
    (i32.shr_u
     (get_local $5)
     (i32.const 1)
    )
    (get_local $0)
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.eqz
     (i32.and
      (i32.load8_u offset=8
       (get_local $6)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load
     (i32.add
      (get_local $6)
      (i32.const 16)
     )
    )
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (tee_local $2
      (i32.load offset=48
       (get_local $6)
      )
     )
    )
   )
   (block $label$3
    (block $label$4
     (br_if $label$4
      (i32.eq
       (tee_local $5
        (i32.load
         (tee_local $4
          (i32.add
           (get_local $6)
           (i32.const 52)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$5
      (set_local $0
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $5)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $5)
       (i32.const 0)
      )
      (block $label$6
       (br_if $label$6
        (i32.eqz
         (get_local $0)
        )
       )
       (call $_ZdlPv
        (get_local $0)
       )
      )
      (br_if $label$5
       (i32.ne
        (get_local $2)
        (get_local $5)
       )
      )
     )
     (set_local $5
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 48)
       )
      )
     )
     (br $label$3)
    )
    (set_local $5
     (get_local $2)
    )
   )
   (i32.store
    (get_local $4)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $5)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 64)
   )
  )
 )
 (func $_ZN4repo6actingEyyy (type $FUNCSIG$vijjj) (param $0 i32) (param $1 i64) (param $2 i64) (param $3 i64)
  (local $4 i64)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i64)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i64)
  (local $22 i64)
  (local $23 i64)
  (local $24 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $24
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 288)
    )
   )
  )
  (call $require_auth
   (get_local $1)
  )
  (i32.store offset=264
   (get_local $24)
   (i32.const 0)
  )
  (i64.store offset=256
   (get_local $24)
   (i64.const 0)
  )
  (i32.store
   (i32.add
    (get_local $24)
    (i32.const 248)
   )
   (i32.const 0)
  )
  (i64.store offset=240
   (get_local $24)
   (i64.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.ge_u
     (tee_local $20
      (call $strlen
       (i32.const 304)
      )
     )
     (i32.const -16)
    )
   )
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.ge_u
        (get_local $20)
        (i32.const 11)
       )
      )
      (i32.store8 offset=240
       (get_local $24)
       (i32.shl
        (get_local $20)
        (i32.const 1)
       )
      )
      (set_local $10
       (i32.or
        (i32.add
         (get_local $24)
         (i32.const 240)
        )
        (i32.const 1)
       )
      )
      (br_if $label$2
       (get_local $20)
      )
      (br $label$1)
     )
     (set_local $10
      (call $_Znwj
       (tee_local $9
        (i32.and
         (i32.add
          (get_local $20)
          (i32.const 16)
         )
         (i32.const -16)
        )
       )
      )
     )
     (i32.store offset=240
      (get_local $24)
      (i32.or
       (get_local $9)
       (i32.const 1)
      )
     )
     (i32.store offset=248
      (get_local $24)
      (get_local $10)
     )
     (i32.store offset=244
      (get_local $24)
      (get_local $20)
     )
    )
    (drop
     (call $memcpy
      (get_local $10)
      (i32.const 304)
      (get_local $20)
     )
    )
   )
   (i32.store8
    (i32.add
     (get_local $10)
     (get_local $20)
    )
    (i32.const 0)
   )
   (i32.store
    (i32.add
     (get_local $24)
     (i32.const 232)
    )
    (i32.const 0)
   )
   (i64.store offset=216
    (get_local $24)
    (i64.const -1)
   )
   (i64.store offset=224
    (get_local $24)
    (i64.const 0)
   )
   (i64.store offset=200
    (get_local $24)
    (tee_local $21
     (i64.load
      (get_local $0)
     )
    )
   )
   (i64.store offset=208
    (get_local $24)
    (get_local $21)
   )
   (block $label$4
    (block $label$5
     (block $label$6
      (block $label$7
       (block $label$8
        (block $label$9
         (br_if $label$9
          (i32.lt_s
           (tee_local $20
            (call $db_find_i64
             (get_local $21)
             (get_local $21)
             (i64.const -4995709579134965888)
             (get_local $1)
            )
           )
           (i32.const 0)
          )
         )
         (call $eosio_assert
          (i32.eq
           (i32.load offset=32
            (tee_local $13
             (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
              (i32.add
               (get_local $24)
               (i32.const 200)
              )
              (get_local $20)
             )
            )
           )
           (i32.add
            (get_local $24)
            (i32.const 200)
           )
          )
          (i32.const 320)
         )
         (call $_ZN4repo8findroleEy
          (i32.add
           (get_local $24)
           (i32.const 144)
          )
          (get_local $0)
          (i64.load offset=8
           (get_local $13)
          )
         )
         (br_if $label$8
          (i32.and
           (i32.load8_u offset=256
            (get_local $24)
           )
           (i32.const 1)
          )
         )
         (i32.store16 offset=256
          (get_local $24)
          (i32.const 0)
         )
         (br $label$7)
        )
        (call $_ZN4repo8findroleEy
         (i32.add
          (get_local $24)
          (i32.const 144)
         )
         (get_local $0)
         (i64.const 0)
        )
        (br_if $label$6
         (i32.and
          (i32.load8_u offset=256
           (get_local $24)
          )
          (i32.const 1)
         )
        )
        (i32.store16 offset=256
         (get_local $24)
         (i32.const 0)
        )
        (br $label$5)
       )
       (i32.store8
        (i32.load
         (i32.add
          (get_local $24)
          (i32.const 264)
         )
        )
        (i32.const 0)
       )
       (i32.store offset=260
        (get_local $24)
        (i32.const 0)
       )
      )
      (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
       (i32.add
        (get_local $24)
        (i32.const 256)
       )
       (i32.const 0)
      )
      (i32.store
       (i32.add
        (i32.add
         (get_local $24)
         (i32.const 256)
        )
        (i32.const 8)
       )
       (i32.load
        (i32.add
         (i32.add
          (get_local $24)
          (i32.const 144)
         )
         (i32.const 8)
        )
       )
      )
      (i64.store offset=256
       (get_local $24)
       (i64.load offset=144
        (get_local $24)
       )
      )
      (br $label$4)
     )
     (i32.store8
      (i32.load
       (i32.add
        (get_local $24)
        (i32.const 264)
       )
      )
      (i32.const 0)
     )
     (i32.store offset=260
      (get_local $24)
      (i32.const 0)
     )
    )
    (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
     (i32.add
      (get_local $24)
      (i32.const 256)
     )
     (i32.const 0)
    )
    (i32.store
     (i32.add
      (i32.add
       (get_local $24)
       (i32.const 256)
      )
      (i32.const 8)
     )
     (i32.load
      (i32.add
       (i32.add
        (get_local $24)
        (i32.const 144)
       )
       (i32.const 8)
      )
     )
    )
    (i64.store offset=256
     (get_local $24)
     (i64.load offset=144
      (get_local $24)
     )
    )
    (call $eosio_assert
     (i64.eq
      (i64.load offset=200
       (get_local $24)
      )
      (call $current_receiver)
     )
     (i32.const 880)
    )
    (i32.store offset=32
     (tee_local $20
      (call $_Znwj
       (i32.const 48)
      )
     )
     (i32.add
      (get_local $24)
      (i32.const 200)
     )
    )
    (i64.store offset=8
     (get_local $20)
     (i64.const 0)
    )
    (i64.store
     (get_local $20)
     (get_local $1)
    )
    (i64.store offset=16
     (get_local $20)
     (i64.const 0)
    )
    (i64.store offset=24
     (get_local $20)
     (i64.const 0)
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (get_local $20)
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.or
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 8)
      )
      (i32.add
       (get_local $20)
       (i32.const 8)
      )
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 16)
      )
      (i32.add
       (get_local $20)
       (i32.const 16)
      )
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 24)
      )
      (i32.add
       (get_local $20)
       (i32.const 24)
      )
      (i32.const 8)
     )
    )
    (i32.store offset=36
     (get_local $20)
     (tee_local $9
      (call $db_store_i64
       (i64.load
        (i32.add
         (i32.add
          (get_local $24)
          (i32.const 200)
         )
         (i32.const 8)
        )
       )
       (i64.const -4995709579134965888)
       (get_local $1)
       (tee_local $21
        (i64.load
         (get_local $20)
        )
       )
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 32)
      )
     )
    )
    (block $label$10
     (br_if $label$10
      (i64.lt_u
       (get_local $21)
       (i64.load
        (tee_local $10
         (i32.add
          (i32.add
           (get_local $24)
           (i32.const 200)
          )
          (i32.const 16)
         )
        )
       )
      )
     )
     (i64.store
      (get_local $10)
      (select
       (i64.const -2)
       (i64.add
        (get_local $21)
        (i64.const 1)
       )
       (i64.gt_u
        (get_local $21)
        (i64.const -3)
       )
      )
     )
    )
    (i32.store offset=32
     (get_local $24)
     (get_local $20)
    )
    (i64.store offset=144
     (get_local $24)
     (tee_local $21
      (i64.load
       (get_local $20)
      )
     )
    )
    (i32.store offset=8
     (get_local $24)
     (get_local $9)
    )
    (block $label$11
     (block $label$12
      (br_if $label$12
       (i32.ge_u
        (tee_local $10
         (i32.load
          (tee_local $14
           (i32.add
            (get_local $24)
            (i32.const 228)
           )
          )
         )
        )
        (i32.load
         (i32.add
          (i32.add
           (get_local $24)
           (i32.const 200)
          )
          (i32.const 32)
         )
        )
       )
      )
      (i64.store offset=8
       (get_local $10)
       (get_local $21)
      )
      (i32.store offset=16
       (get_local $10)
       (get_local $9)
      )
      (i32.store offset=32
       (get_local $24)
       (i32.const 0)
      )
      (i32.store
       (get_local $10)
       (get_local $20)
      )
      (i32.store
       (get_local $14)
       (i32.add
        (get_local $10)
        (i32.const 24)
       )
      )
      (br $label$11)
     )
     (call $_ZNSt3__16vectorIN5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE8item_ptrENS_9allocatorIS6_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS5_4itemENS_14default_deleteISC_EEEERyRlEEEvDpOT_
      (i32.add
       (get_local $24)
       (i32.const 224)
      )
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (i32.add
       (get_local $24)
       (i32.const 144)
      )
      (i32.add
       (get_local $24)
       (i32.const 8)
      )
     )
    )
    (set_local $20
     (i32.load offset=32
      (get_local $24)
     )
    )
    (set_local $13
     (i32.const 0)
    )
    (i32.store offset=32
     (get_local $24)
     (i32.const 0)
    )
    (br_if $label$4
     (i32.eqz
      (get_local $20)
     )
    )
    (call $_ZdlPv
     (get_local $20)
    )
   )
   (call $prints
    (i32.const 1504)
   )
   (call $prints_l
    (select
     (i32.load
      (i32.add
       (get_local $24)
       (i32.const 264)
      )
     )
     (i32.or
      (i32.add
       (get_local $24)
       (i32.const 256)
      )
      (i32.const 1)
     )
     (tee_local $10
      (i32.and
       (tee_local $20
        (i32.load8_u offset=256
         (get_local $24)
        )
       )
       (i32.const 1)
      )
     )
    )
    (select
     (i32.load offset=260
      (get_local $24)
     )
     (i32.shr_u
      (get_local $20)
      (i32.const 1)
     )
     (get_local $10)
    )
   )
   (call $prints
    (i32.const 1520)
   )
   (drop
    (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
     (i32.add
      (get_local $24)
      (i32.const 184)
     )
     (i32.add
      (get_local $24)
      (i32.const 256)
     )
    )
   )
   (call $_ZN4repo6canactENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy
    (get_local $0)
    (i32.add
     (get_local $24)
     (i32.const 184)
    )
    (get_local $2)
   )
   (block $label$13
    (br_if $label$13
     (i32.eqz
      (i32.and
       (i32.load8_u offset=184
        (get_local $24)
       )
       (i32.const 1)
      )
     )
    )
    (call $_ZdlPv
     (i32.load offset=192
      (get_local $24)
     )
    )
   )
   (set_local $14
    (i32.const 0)
   )
   (i32.store
    (i32.add
     (get_local $24)
     (i32.const 176)
    )
    (i32.const 0)
   )
   (i64.store offset=160
    (get_local $24)
    (i64.const -1)
   )
   (i64.store offset=168
    (get_local $24)
    (i64.const 0)
   )
   (i64.store offset=144
    (get_local $24)
    (tee_local $21
     (i64.load
      (get_local $0)
     )
    )
   )
   (i64.store offset=152
    (get_local $24)
    (get_local $21)
   )
   (block $label$14
    (br_if $label$14
     (i32.lt_s
      (tee_local $20
       (call $db_find_i64
        (get_local $21)
        (get_local $21)
        (i64.const -7876113394178195456)
        (get_local $21)
       )
      )
      (i32.const 0)
     )
    )
    (call $eosio_assert
     (i32.eq
      (i32.load offset=32
       (tee_local $14
        (call $_ZNK5eosio11multi_indexILy10570630679531356160EN4repo4metaEJEE31load_object_by_primary_iteratorEl
         (i32.add
          (get_local $24)
          (i32.const 144)
         )
         (get_local $20)
        )
       )
      )
      (i32.add
       (get_local $24)
       (i32.const 144)
      )
     )
     (i32.const 320)
    )
   )
   (set_local $21
    (i64.load32_u offset=8
     (get_local $14)
    )
   )
   (drop
    (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
     (i32.add
      (get_local $24)
      (i32.const 128)
     )
     (i32.add
      (get_local $24)
      (i32.const 256)
     )
    )
   )
   (set_local $4
    (i64.div_u
     (i64.mul
      (get_local $21)
      (call $_ZN4repo8helpcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy
       (get_local $0)
       (i32.add
        (get_local $24)
        (i32.const 128)
       )
       (get_local $2)
      )
     )
     (i64.const 10000)
    )
   )
   (block $label$15
    (br_if $label$15
     (i32.eqz
      (i32.and
       (i32.load8_u offset=128
        (get_local $24)
       )
       (i32.const 1)
      )
     )
    )
    (call $_ZdlPv
     (i32.load offset=136
      (get_local $24)
     )
    )
   )
   (drop
    (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
     (i32.add
      (get_local $24)
      (i32.const 112)
     )
     (i32.add
      (get_local $24)
      (i32.const 256)
     )
    )
   )
   (set_local $5
    (call $_ZN4repo7helprepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy
     (get_local $0)
     (i32.add
      (get_local $24)
      (i32.const 112)
     )
     (get_local $2)
    )
   )
   (block $label$16
    (br_if $label$16
     (i32.eqz
      (i32.and
       (i32.load8_u offset=112
        (get_local $24)
       )
       (i32.const 1)
      )
     )
    )
    (call $_ZdlPv
     (i32.load offset=120
      (get_local $24)
     )
    )
   )
   (block $label$17
    (br_if $label$17
     (i32.eq
      (tee_local $9
       (i32.load
        (i32.add
         (get_local $24)
         (i32.const 228)
        )
       )
      )
      (tee_local $6
       (i32.load
        (i32.add
         (get_local $24)
         (i32.const 224)
        )
       )
      )
     )
    )
    (set_local $20
     (i32.add
      (get_local $9)
      (i32.const -24)
     )
    )
    (set_local $7
     (i32.sub
      (i32.const 0)
      (get_local $6)
     )
    )
    (loop $label$18
     (br_if $label$17
      (i64.eq
       (i64.load
        (i32.load
         (get_local $20)
        )
       )
       (get_local $3)
      )
     )
     (set_local $9
      (get_local $20)
     )
     (set_local $20
      (tee_local $10
       (i32.add
        (get_local $20)
        (i32.const -24)
       )
      )
     )
     (br_if $label$18
      (i32.ne
       (i32.add
        (get_local $10)
        (get_local $7)
       )
       (i32.const -24)
      )
     )
    )
   )
   (block $label$19
    (block $label$20
     (block $label$21
      (block $label$22
       (block $label$23
        (block $label$24
         (br_if $label$24
          (i32.eq
           (get_local $9)
           (get_local $6)
          )
         )
         (call $eosio_assert
          (i32.eq
           (i32.load offset=32
            (tee_local $20
             (i32.load
              (i32.add
               (get_local $9)
               (i32.const -24)
              )
             )
            )
           )
           (i32.add
            (get_local $24)
            (i32.const 200)
           )
          )
          (i32.const 320)
         )
         (br_if $label$23
          (get_local $20)
         )
         (br $label$22)
        )
        (br_if $label$22
         (i32.lt_s
          (tee_local $20
           (call $db_find_i64
            (i64.load offset=200
             (get_local $24)
            )
            (i64.load
             (i32.add
              (get_local $24)
              (i32.const 208)
             )
            )
            (i64.const -4995709579134965888)
            (get_local $3)
           )
          )
          (i32.const 0)
         )
        )
        (call $eosio_assert
         (i32.eq
          (i32.load offset=32
           (tee_local $20
            (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
             (i32.add
              (get_local $24)
              (i32.const 200)
             )
             (get_local $20)
            )
           )
          )
          (i32.add
           (get_local $24)
           (i32.const 200)
          )
         )
         (i32.const 320)
        )
       )
       (call $_ZN4repo8findroleEy
        (i32.add
         (get_local $24)
         (i32.const 32)
        )
        (get_local $0)
        (i64.load offset=8
         (get_local $20)
        )
       )
       (br_if $label$21
        (i32.and
         (i32.load8_u offset=240
          (get_local $24)
         )
         (i32.const 1)
        )
       )
       (i32.store16 offset=240
        (get_local $24)
        (i32.const 0)
       )
       (br $label$20)
      )
      (set_local $15
       (i64.const 0)
      )
      (br $label$19)
     )
     (i32.store8
      (i32.load offset=248
       (get_local $24)
      )
      (i32.const 0)
     )
     (i32.store offset=244
      (get_local $24)
      (i32.const 0)
     )
    )
    (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
     (i32.add
      (get_local $24)
      (i32.const 240)
     )
     (i32.const 0)
    )
    (i32.store
     (i32.add
      (i32.add
       (get_local $24)
       (i32.const 240)
      )
      (i32.const 8)
     )
     (i32.load
      (i32.add
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 8)
      )
     )
    )
    (i64.store offset=240
     (get_local $24)
     (i64.load offset=32
      (get_local $24)
     )
    )
    (set_local $3
     (i64.load32_u
      (i32.add
       (get_local $14)
       (i32.const 8)
      )
     )
    )
    (drop
     (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
      (i32.add
       (get_local $24)
       (i32.const 96)
      )
      (i32.add
       (get_local $24)
       (i32.const 240)
      )
     )
    )
    (set_local $15
     (i64.div_u
      (i64.mul
       (get_local $3)
       (call $_ZN4repo8helpcompENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy
        (get_local $0)
        (i32.add
         (get_local $24)
         (i32.const 96)
        )
        (get_local $2)
       )
      )
      (i64.const 10000)
     )
    )
    (block $label$25
     (br_if $label$25
      (i32.eqz
       (i32.and
        (i32.load8_u offset=96
         (get_local $24)
        )
        (i32.const 1)
       )
      )
     )
     (call $_ZdlPv
      (i32.load offset=104
       (get_local $24)
      )
     )
    )
    (drop
     (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
      (i32.add
       (get_local $24)
       (i32.const 80)
      )
      (i32.add
       (get_local $24)
       (i32.const 240)
      )
     )
    )
    (set_local $3
     (call $_ZN4repo7helprepENSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEy
      (get_local $0)
      (i32.add
       (get_local $24)
       (i32.const 80)
      )
      (get_local $2)
     )
    )
    (block $label$26
     (br_if $label$26
      (i32.eqz
       (i32.and
        (i32.load8_u offset=80
         (get_local $24)
        )
        (i32.const 1)
       )
      )
     )
     (call $_ZdlPv
      (i32.load offset=88
       (get_local $24)
      )
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 480)
    )
    (call $eosio_assert
     (i32.eq
      (i32.load offset=32
       (get_local $20)
      )
      (i32.add
       (get_local $24)
       (i32.const 200)
      )
     )
     (i32.const 32)
    )
    (call $eosio_assert
     (i64.eq
      (i64.load offset=200
       (get_local $24)
      )
      (call $current_receiver)
     )
     (i32.const 80)
    )
    (i64.store offset=16
     (get_local $20)
     (i64.add
      (i64.load offset=16
       (get_local $20)
      )
      (get_local $15)
     )
    )
    (i64.store offset=8
     (get_local $20)
     (i64.add
      (i64.load offset=8
       (get_local $20)
      )
      (get_local $3)
     )
    )
    (set_local $3
     (i64.load
      (get_local $20)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 144)
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (get_local $20)
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.or
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 8)
      )
      (i32.add
       (get_local $20)
       (i32.const 8)
      )
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 16)
      )
      (i32.add
       (get_local $20)
       (i32.const 16)
      )
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.const 1)
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 24)
      )
      (i32.add
       (get_local $20)
       (i32.const 24)
      )
      (i32.const 8)
     )
    )
    (call $db_update_i64
     (i32.load offset=36
      (get_local $20)
     )
     (i64.const 0)
     (i32.add
      (get_local $24)
      (i32.const 32)
     )
     (i32.const 32)
    )
    (br_if $label$19
     (i64.lt_u
      (get_local $3)
      (i64.load
       (tee_local $20
        (i32.add
         (i32.add
          (get_local $24)
          (i32.const 200)
         )
         (i32.const 16)
        )
       )
      )
     )
    )
    (i64.store
     (get_local $20)
     (select
      (i64.const -2)
      (i64.add
       (get_local $3)
       (i64.const 1)
      )
      (i64.gt_u
       (get_local $3)
       (i64.const -3)
      )
     )
    )
   )
   (block $label$27
    (br_if $label$27
     (i32.eq
      (tee_local $9
       (i32.load
        (i32.add
         (get_local $24)
         (i32.const 228)
        )
       )
      )
      (tee_local $6
       (i32.load
        (i32.add
         (get_local $24)
         (i32.const 224)
        )
       )
      )
     )
    )
    (set_local $20
     (i32.add
      (get_local $9)
      (i32.const -24)
     )
    )
    (set_local $7
     (i32.sub
      (i32.const 0)
      (get_local $6)
     )
    )
    (loop $label$28
     (br_if $label$27
      (i64.eq
       (i64.load
        (i32.load
         (get_local $20)
        )
       )
       (get_local $1)
      )
     )
     (set_local $9
      (get_local $20)
     )
     (set_local $20
      (tee_local $10
       (i32.add
        (get_local $20)
        (i32.const -24)
       )
      )
     )
     (br_if $label$28
      (i32.ne
       (i32.add
        (get_local $10)
        (get_local $7)
       )
       (i32.const -24)
      )
     )
    )
   )
   (block $label$29
    (block $label$30
     (br_if $label$30
      (i32.eq
       (get_local $9)
       (get_local $6)
      )
     )
     (call $eosio_assert
      (i32.eq
       (i32.load offset=32
        (tee_local $10
         (i32.load
          (i32.add
           (get_local $9)
           (i32.const -24)
          )
         )
        )
       )
       (i32.add
        (get_local $24)
        (i32.const 200)
       )
      )
      (i32.const 320)
     )
     (br $label$29)
    )
    (set_local $10
     (i32.const 0)
    )
    (br_if $label$29
     (i32.lt_s
      (tee_local $20
       (call $db_find_i64
        (i64.load offset=200
         (get_local $24)
        )
        (i64.load
         (i32.add
          (get_local $24)
          (i32.const 208)
         )
        )
        (i64.const -4995709579134965888)
        (get_local $1)
       )
      )
      (i32.const 0)
     )
    )
    (call $eosio_assert
     (i32.eq
      (i32.load offset=32
       (tee_local $10
        (call $_ZNK5eosio11multi_indexILy13451034494574585728EN4repo11reputationsEJEE31load_object_by_primary_iteratorEl
         (i32.add
          (get_local $24)
          (i32.const 200)
         )
         (get_local $20)
        )
       )
      )
      (i32.add
       (get_local $24)
       (i32.const 200)
      )
     )
     (i32.const 320)
    )
   )
   (set_local $3
    (i64.load offset=24
     (get_local $10)
    )
   )
   (i64.store offset=72
    (get_local $24)
    (i64.load
     (get_local $0)
    )
   )
   (block $label$31
    (block $label$32
     (block $label$33
      (br_if $label$33
       (i64.eq
        (get_local $2)
        (i64.const 1)
       )
      )
      (br_if $label$32
       (i64.ne
        (get_local $2)
        (i64.const 4)
       )
      )
      (call $eosio_assert
       (i64.eqz
        (get_local $3)
       )
       (i32.const 1600)
      )
      (call $eosio_assert
       (i32.ne
        (get_local $10)
        (i32.const 0)
       )
       (i32.const 480)
      )
      (call $eosio_assert
       (i32.eq
        (i32.load offset=32
         (get_local $10)
        )
        (i32.add
         (get_local $24)
         (i32.const 200)
        )
       )
       (i32.const 32)
      )
      (call $eosio_assert
       (i64.eq
        (i64.load offset=200
         (get_local $24)
        )
        (call $current_receiver)
       )
       (i32.const 80)
      )
      (i64.store offset=24
       (get_local $10)
       (i64.const 1)
      )
      (set_local $3
       (i64.load
        (get_local $10)
       )
      )
      (call $eosio_assert
       (i32.const 1)
       (i32.const 144)
      )
      (call $eosio_assert
       (i32.const 1)
       (i32.const 208)
      )
      (drop
       (call $memcpy
        (i32.add
         (get_local $24)
         (i32.const 32)
        )
        (get_local $10)
        (i32.const 8)
       )
      )
      (call $eosio_assert
       (i32.const 1)
       (i32.const 208)
      )
      (drop
       (call $memcpy
        (tee_local $7
         (i32.or
          (i32.add
           (get_local $24)
           (i32.const 32)
          )
          (i32.const 8)
         )
        )
        (tee_local $6
         (i32.add
          (get_local $10)
          (i32.const 8)
         )
        )
        (i32.const 8)
       )
      )
      (call $eosio_assert
       (i32.const 1)
       (i32.const 208)
      )
      (drop
       (call $memcpy
        (tee_local $19
         (i32.add
          (i32.add
           (get_local $24)
           (i32.const 32)
          )
          (i32.const 16)
         )
        )
        (tee_local $18
         (i32.add
          (get_local $10)
          (i32.const 16)
         )
        )
        (i32.const 8)
       )
      )
      (call $eosio_assert
       (i32.const 1)
       (i32.const 208)
      )
      (drop
       (call $memcpy
        (tee_local $17
         (i32.add
          (i32.add
           (get_local $24)
           (i32.const 32)
          )
          (i32.const 24)
         )
        )
        (tee_local $16
         (i32.add
          (get_local $10)
          (i32.const 24)
         )
        )
        (i32.const 8)
       )
      )
      (set_local $1
       (i64.const 0)
      )
      (call $db_update_i64
       (i32.load offset=36
        (get_local $10)
       )
       (i64.const 0)
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (i32.const 32)
      )
      (block $label$34
       (br_if $label$34
        (i64.lt_u
         (get_local $3)
         (i64.load
          (tee_local $20
           (i32.add
            (i32.add
             (get_local $24)
             (i32.const 200)
            )
            (i32.const 16)
           )
          )
         )
        )
       )
       (i64.store
        (get_local $20)
        (select
         (i64.const -2)
         (i64.add
          (get_local $3)
          (i64.const 1)
         )
         (i64.gt_u
          (get_local $3)
          (i64.const -3)
         )
        )
       )
      )
      (set_local $8
       (i64.load
        (get_local $0)
       )
      )
      (set_local $2
       (i64.const 59)
      )
      (set_local $20
       (i32.const 528)
      )
      (set_local $21
       (i64.const 0)
      )
      (loop $label$35
       (block $label$36
        (block $label$37
         (block $label$38
          (block $label$39
           (block $label$40
            (br_if $label$40
             (i64.gt_u
              (get_local $1)
              (i64.const 5)
             )
            )
            (br_if $label$39
             (i32.gt_u
              (i32.and
               (i32.add
                (tee_local $9
                 (i32.load8_s
                  (get_local $20)
                 )
                )
                (i32.const -97)
               )
               (i32.const 255)
              )
              (i32.const 25)
             )
            )
            (set_local $9
             (i32.add
              (get_local $9)
              (i32.const 165)
             )
            )
            (br $label$38)
           )
           (set_local $3
            (i64.const 0)
           )
           (br_if $label$37
            (i64.le_u
             (get_local $1)
             (i64.const 11)
            )
           )
           (br $label$36)
          )
          (set_local $9
           (select
            (i32.add
             (get_local $9)
             (i32.const 208)
            )
            (i32.const 0)
            (i32.lt_u
             (i32.and
              (i32.add
               (get_local $9)
               (i32.const -49)
              )
              (i32.const 255)
             )
             (i32.const 5)
            )
           )
          )
         )
         (set_local $3
          (i64.shr_s
           (i64.shl
            (i64.extend_u/i32
             (get_local $9)
            )
            (i64.const 56)
           )
           (i64.const 56)
          )
         )
        )
        (set_local $3
         (i64.shl
          (i64.and
           (get_local $3)
           (i64.const 31)
          )
          (i64.and
           (get_local $2)
           (i64.const 4294967295)
          )
         )
        )
       )
       (set_local $20
        (i32.add
         (get_local $20)
         (i32.const 1)
        )
       )
       (set_local $1
        (i64.add
         (get_local $1)
         (i64.const 1)
        )
       )
       (set_local $21
        (i64.or
         (get_local $3)
         (get_local $21)
        )
       )
       (br_if $label$35
        (i64.ne
         (tee_local $2
          (i64.add
           (get_local $2)
           (i64.const -5)
          )
         )
         (i64.const -6)
        )
       )
      )
      (set_local $1
       (i64.const 0)
      )
      (set_local $2
       (i64.const 59)
      )
      (set_local $20
       (i32.const 16)
      )
      (set_local $22
       (i64.const 0)
      )
      (loop $label$41
       (block $label$42
        (block $label$43
         (block $label$44
          (block $label$45
           (block $label$46
            (br_if $label$46
             (i64.gt_u
              (get_local $1)
              (i64.const 5)
             )
            )
            (br_if $label$45
             (i32.gt_u
              (i32.and
               (i32.add
                (tee_local $9
                 (i32.load8_s
                  (get_local $20)
                 )
                )
                (i32.const -97)
               )
               (i32.const 255)
              )
              (i32.const 25)
             )
            )
            (set_local $9
             (i32.add
              (get_local $9)
              (i32.const 165)
             )
            )
            (br $label$44)
           )
           (set_local $3
            (i64.const 0)
           )
           (br_if $label$43
            (i64.le_u
             (get_local $1)
             (i64.const 11)
            )
           )
           (br $label$42)
          )
          (set_local $9
           (select
            (i32.add
             (get_local $9)
             (i32.const 208)
            )
            (i32.const 0)
            (i32.lt_u
             (i32.and
              (i32.add
               (get_local $9)
               (i32.const -49)
              )
              (i32.const 255)
             )
             (i32.const 5)
            )
           )
          )
         )
         (set_local $3
          (i64.shr_s
           (i64.shl
            (i64.extend_u/i32
             (get_local $9)
            )
            (i64.const 56)
           )
           (i64.const 56)
          )
         )
        )
        (set_local $3
         (i64.shl
          (i64.and
           (get_local $3)
           (i64.const 31)
          )
          (i64.and
           (get_local $2)
           (i64.const 4294967295)
          )
         )
        )
       )
       (set_local $20
        (i32.add
         (get_local $20)
         (i32.const 1)
        )
       )
       (set_local $1
        (i64.add
         (get_local $1)
         (i64.const 1)
        )
       )
       (set_local $22
        (i64.or
         (get_local $3)
         (get_local $22)
        )
       )
       (br_if $label$41
        (i64.ne
         (tee_local $2
          (i64.add
           (get_local $2)
           (i64.const -5)
          )
         )
         (i64.const -6)
        )
       )
      )
      (set_local $1
       (i64.const 0)
      )
      (set_local $2
       (i64.const 59)
      )
      (set_local $20
       (i32.const 1632)
      )
      (set_local $23
       (i64.const 0)
      )
      (loop $label$47
       (block $label$48
        (block $label$49
         (block $label$50
          (block $label$51
           (block $label$52
            (br_if $label$52
             (i64.gt_u
              (get_local $1)
              (i64.const 3)
             )
            )
            (br_if $label$51
             (i32.gt_u
              (i32.and
               (i32.add
                (tee_local $9
                 (i32.load8_s
                  (get_local $20)
                 )
                )
                (i32.const -97)
               )
               (i32.const 255)
              )
              (i32.const 25)
             )
            )
            (set_local $9
             (i32.add
              (get_local $9)
              (i32.const 165)
             )
            )
            (br $label$50)
           )
           (set_local $3
            (i64.const 0)
           )
           (br_if $label$49
            (i64.le_u
             (get_local $1)
             (i64.const 11)
            )
           )
           (br $label$48)
          )
          (set_local $9
           (select
            (i32.add
             (get_local $9)
             (i32.const 208)
            )
            (i32.const 0)
            (i32.lt_u
             (i32.and
              (i32.add
               (get_local $9)
               (i32.const -49)
              )
              (i32.const 255)
             )
             (i32.const 5)
            )
           )
          )
         )
         (set_local $3
          (i64.shr_s
           (i64.shl
            (i64.extend_u/i32
             (get_local $9)
            )
            (i64.const 56)
           )
           (i64.const 56)
          )
         )
        )
        (set_local $3
         (i64.shl
          (i64.and
           (get_local $3)
           (i64.const 31)
          )
          (i64.and
           (get_local $2)
           (i64.const 4294967295)
          )
         )
        )
       )
       (set_local $20
        (i32.add
         (get_local $20)
         (i32.const 1)
        )
       )
       (set_local $1
        (i64.add
         (get_local $1)
         (i64.const 1)
        )
       )
       (set_local $23
        (i64.or
         (get_local $3)
         (get_local $23)
        )
       )
       (br_if $label$47
        (i64.ne
         (tee_local $2
          (i64.add
           (get_local $2)
           (i64.const -5)
          )
         )
         (i64.const -6)
        )
       )
      )
      (i32.store
       (tee_local $9
        (i32.add
         (get_local $24)
         (i32.const 56)
        )
       )
       (i32.const 0)
      )
      (i64.store offset=40
       (get_local $24)
       (get_local $23)
      )
      (i64.store offset=32
       (get_local $24)
       (get_local $22)
      )
      (i64.store offset=48
       (get_local $24)
       (i64.const 0)
      )
      (i64.store
       (tee_local $20
        (call $_Znwj
         (i32.const 16)
        )
       )
       (get_local $8)
      )
      (i64.store offset=8
       (get_local $20)
       (get_local $21)
      )
      (i32.store
       (tee_local $11
        (i32.add
         (get_local $24)
         (i32.const 64)
        )
       )
       (i32.const 0)
      )
      (i32.store
       (get_local $9)
       (tee_local $12
        (i32.add
         (get_local $20)
         (i32.const 16)
        )
       )
      )
      (i32.store
       (i32.add
        (get_local $24)
        (i32.const 52)
       )
       (get_local $12)
      )
      (i32.store offset=48
       (get_local $24)
       (get_local $20)
      )
      (i32.store offset=60
       (get_local $24)
       (i32.const 0)
      )
      (i32.store
       (i32.add
        (get_local $24)
        (i32.const 68)
       )
       (i32.const 0)
      )
      (call $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj
       (i32.add
        (get_local $24)
        (i32.const 60)
       )
       (i32.const 8)
      )
      (call $eosio_assert
       (i32.gt_s
        (i32.sub
         (i32.load
          (get_local $11)
         )
         (tee_local $20
          (i32.load offset=60
           (get_local $24)
          )
         )
        )
        (i32.const 7)
       )
       (i32.const 208)
      )
      (drop
       (call $memcpy
        (get_local $20)
        (i32.add
         (get_local $24)
         (i32.const 72)
        )
        (i32.const 8)
       )
      )
      (call $_ZN5eosio4packINS_6actionEEENSt3__16vectorIcNS2_9allocatorIcEEEERKT_
       (i32.add
        (get_local $24)
        (i32.const 8)
       )
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
      )
      (call $send_inline
       (tee_local $20
        (i32.load offset=8
         (get_local $24)
        )
       )
       (i32.sub
        (i32.load offset=12
         (get_local $24)
        )
        (get_local $20)
       )
      )
      (block $label$53
       (br_if $label$53
        (i32.eqz
         (tee_local $20
          (i32.load offset=8
           (get_local $24)
          )
         )
        )
       )
       (i32.store offset=12
        (get_local $24)
        (get_local $20)
       )
       (call $_ZdlPv
        (get_local $20)
       )
      )
      (block $label$54
       (br_if $label$54
        (i32.eqz
         (tee_local $20
          (i32.load offset=60
           (get_local $24)
          )
         )
        )
       )
       (i32.store
        (i32.add
         (get_local $24)
         (i32.const 64)
        )
        (get_local $20)
       )
       (call $_ZdlPv
        (get_local $20)
       )
      )
      (block $label$55
       (br_if $label$55
        (i32.eqz
         (tee_local $20
          (i32.load offset=48
           (get_local $24)
          )
         )
        )
       )
       (i32.store
        (i32.add
         (get_local $24)
         (i32.const 52)
        )
        (get_local $20)
       )
       (call $_ZdlPv
        (get_local $20)
       )
      )
      (set_local $20
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
      )
      (br $label$31)
     )
     (set_local $1
      (i64.const 0)
     )
     (call $eosio_assert
      (i64.ne
       (get_local $3)
       (i64.const 0)
      )
      (i32.const 1536)
     )
     (call $eosio_assert
      (i32.ne
       (get_local $10)
       (i32.const 0)
      )
      (i32.const 480)
     )
     (call $eosio_assert
      (i32.eq
       (i32.load offset=32
        (get_local $10)
       )
       (i32.add
        (get_local $24)
        (i32.const 200)
       )
      )
      (i32.const 32)
     )
     (call $eosio_assert
      (i64.eq
       (i64.load offset=200
        (get_local $24)
       )
       (call $current_receiver)
      )
      (i32.const 80)
     )
     (i64.store offset=24
      (get_local $10)
      (i64.const 0)
     )
     (set_local $3
      (i64.load
       (get_local $10)
      )
     )
     (call $eosio_assert
      (i32.const 1)
      (i32.const 144)
     )
     (call $eosio_assert
      (i32.const 1)
      (i32.const 208)
     )
     (drop
      (call $memcpy
       (i32.add
        (get_local $24)
        (i32.const 32)
       )
       (get_local $10)
       (i32.const 8)
      )
     )
     (call $eosio_assert
      (i32.const 1)
      (i32.const 208)
     )
     (drop
      (call $memcpy
       (tee_local $7
        (i32.or
         (i32.add
          (get_local $24)
          (i32.const 32)
         )
         (i32.const 8)
        )
       )
       (tee_local $6
        (i32.add
         (get_local $10)
         (i32.const 8)
        )
       )
       (i32.const 8)
      )
     )
     (call $eosio_assert
      (i32.const 1)
      (i32.const 208)
     )
     (drop
      (call $memcpy
       (tee_local $19
        (i32.add
         (i32.add
          (get_local $24)
          (i32.const 32)
         )
         (i32.const 16)
        )
       )
       (tee_local $18
        (i32.add
         (get_local $10)
         (i32.const 16)
        )
       )
       (i32.const 8)
      )
     )
     (call $eosio_assert
      (i32.const 1)
      (i32.const 208)
     )
     (drop
      (call $memcpy
       (tee_local $17
        (i32.add
         (i32.add
          (get_local $24)
          (i32.const 32)
         )
         (i32.const 24)
        )
       )
       (tee_local $16
        (i32.add
         (get_local $10)
         (i32.const 24)
        )
       )
       (i32.const 8)
      )
     )
     (call $db_update_i64
      (i32.load offset=36
       (get_local $10)
      )
      (i64.const 0)
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (i32.const 32)
     )
     (block $label$56
      (br_if $label$56
       (i64.lt_u
        (get_local $3)
        (i64.load
         (tee_local $20
          (i32.add
           (i32.add
            (get_local $24)
            (i32.const 200)
           )
           (i32.const 16)
          )
         )
        )
       )
      )
      (i64.store
       (get_local $20)
       (select
        (i64.const -2)
        (i64.add
         (get_local $3)
         (i64.const 1)
        )
        (i64.gt_u
         (get_local $3)
         (i64.const -3)
        )
       )
      )
     )
     (set_local $8
      (i64.load
       (get_local $0)
      )
     )
     (set_local $2
      (i64.const 59)
     )
     (set_local $20
      (i32.const 528)
     )
     (set_local $21
      (i64.const 0)
     )
     (loop $label$57
      (block $label$58
       (block $label$59
        (block $label$60
         (block $label$61
          (block $label$62
           (br_if $label$62
            (i64.gt_u
             (get_local $1)
             (i64.const 5)
            )
           )
           (br_if $label$61
            (i32.gt_u
             (i32.and
              (i32.add
               (tee_local $9
                (i32.load8_s
                 (get_local $20)
                )
               )
               (i32.const -97)
              )
              (i32.const 255)
             )
             (i32.const 25)
            )
           )
           (set_local $9
            (i32.add
             (get_local $9)
             (i32.const 165)
            )
           )
           (br $label$60)
          )
          (set_local $3
           (i64.const 0)
          )
          (br_if $label$59
           (i64.le_u
            (get_local $1)
            (i64.const 11)
           )
          )
          (br $label$58)
         )
         (set_local $9
          (select
           (i32.add
            (get_local $9)
            (i32.const 208)
           )
           (i32.const 0)
           (i32.lt_u
            (i32.and
             (i32.add
              (get_local $9)
              (i32.const -49)
             )
             (i32.const 255)
            )
            (i32.const 5)
           )
          )
         )
        )
        (set_local $3
         (i64.shr_s
          (i64.shl
           (i64.extend_u/i32
            (get_local $9)
           )
           (i64.const 56)
          )
          (i64.const 56)
         )
        )
       )
       (set_local $3
        (i64.shl
         (i64.and
          (get_local $3)
          (i64.const 31)
         )
         (i64.and
          (get_local $2)
          (i64.const 4294967295)
         )
        )
       )
      )
      (set_local $20
       (i32.add
        (get_local $20)
        (i32.const 1)
       )
      )
      (set_local $1
       (i64.add
        (get_local $1)
        (i64.const 1)
       )
      )
      (set_local $21
       (i64.or
        (get_local $3)
        (get_local $21)
       )
      )
      (br_if $label$57
       (i64.ne
        (tee_local $2
         (i64.add
          (get_local $2)
          (i64.const -5)
         )
        )
        (i64.const -6)
       )
      )
     )
     (set_local $1
      (i64.const 0)
     )
     (set_local $2
      (i64.const 59)
     )
     (set_local $20
      (i32.const 16)
     )
     (set_local $22
      (i64.const 0)
     )
     (loop $label$63
      (block $label$64
       (block $label$65
        (block $label$66
         (block $label$67
          (block $label$68
           (br_if $label$68
            (i64.gt_u
             (get_local $1)
             (i64.const 5)
            )
           )
           (br_if $label$67
            (i32.gt_u
             (i32.and
              (i32.add
               (tee_local $9
                (i32.load8_s
                 (get_local $20)
                )
               )
               (i32.const -97)
              )
              (i32.const 255)
             )
             (i32.const 25)
            )
           )
           (set_local $9
            (i32.add
             (get_local $9)
             (i32.const 165)
            )
           )
           (br $label$66)
          )
          (set_local $3
           (i64.const 0)
          )
          (br_if $label$65
           (i64.le_u
            (get_local $1)
            (i64.const 11)
           )
          )
          (br $label$64)
         )
         (set_local $9
          (select
           (i32.add
            (get_local $9)
            (i32.const 208)
           )
           (i32.const 0)
           (i32.lt_u
            (i32.and
             (i32.add
              (get_local $9)
              (i32.const -49)
             )
             (i32.const 255)
            )
            (i32.const 5)
           )
          )
         )
        )
        (set_local $3
         (i64.shr_s
          (i64.shl
           (i64.extend_u/i32
            (get_local $9)
           )
           (i64.const 56)
          )
          (i64.const 56)
         )
        )
       )
       (set_local $3
        (i64.shl
         (i64.and
          (get_local $3)
          (i64.const 31)
         )
         (i64.and
          (get_local $2)
          (i64.const 4294967295)
         )
        )
       )
      )
      (set_local $20
       (i32.add
        (get_local $20)
        (i32.const 1)
       )
      )
      (set_local $1
       (i64.add
        (get_local $1)
        (i64.const 1)
       )
      )
      (set_local $22
       (i64.or
        (get_local $3)
        (get_local $22)
       )
      )
      (br_if $label$63
       (i64.ne
        (tee_local $2
         (i64.add
          (get_local $2)
          (i64.const -5)
         )
        )
        (i64.const -6)
       )
      )
     )
     (set_local $1
      (i64.const 0)
     )
     (set_local $2
      (i64.const 59)
     )
     (set_local $20
      (i32.const 1584)
     )
     (set_local $23
      (i64.const 0)
     )
     (loop $label$69
      (block $label$70
       (block $label$71
        (block $label$72
         (block $label$73
          (block $label$74
           (br_if $label$74
            (i64.gt_u
             (get_local $1)
             (i64.const 5)
            )
           )
           (br_if $label$73
            (i32.gt_u
             (i32.and
              (i32.add
               (tee_local $9
                (i32.load8_s
                 (get_local $20)
                )
               )
               (i32.const -97)
              )
              (i32.const 255)
             )
             (i32.const 25)
            )
           )
           (set_local $9
            (i32.add
             (get_local $9)
             (i32.const 165)
            )
           )
           (br $label$72)
          )
          (set_local $3
           (i64.const 0)
          )
          (br_if $label$71
           (i64.le_u
            (get_local $1)
            (i64.const 11)
           )
          )
          (br $label$70)
         )
         (set_local $9
          (select
           (i32.add
            (get_local $9)
            (i32.const 208)
           )
           (i32.const 0)
           (i32.lt_u
            (i32.and
             (i32.add
              (get_local $9)
              (i32.const -49)
             )
             (i32.const 255)
            )
            (i32.const 5)
           )
          )
         )
        )
        (set_local $3
         (i64.shr_s
          (i64.shl
           (i64.extend_u/i32
            (get_local $9)
           )
           (i64.const 56)
          )
          (i64.const 56)
         )
        )
       )
       (set_local $3
        (i64.shl
         (i64.and
          (get_local $3)
          (i64.const 31)
         )
         (i64.and
          (get_local $2)
          (i64.const 4294967295)
         )
        )
       )
      )
      (set_local $20
       (i32.add
        (get_local $20)
        (i32.const 1)
       )
      )
      (set_local $1
       (i64.add
        (get_local $1)
        (i64.const 1)
       )
      )
      (set_local $23
       (i64.or
        (get_local $3)
        (get_local $23)
       )
      )
      (br_if $label$69
       (i64.ne
        (tee_local $2
         (i64.add
          (get_local $2)
          (i64.const -5)
         )
        )
        (i64.const -6)
       )
      )
     )
     (i32.store
      (tee_local $9
       (i32.add
        (get_local $24)
        (i32.const 56)
       )
      )
      (i32.const 0)
     )
     (i64.store offset=40
      (get_local $24)
      (get_local $23)
     )
     (i64.store offset=32
      (get_local $24)
      (get_local $22)
     )
     (i64.store offset=48
      (get_local $24)
      (i64.const 0)
     )
     (i64.store
      (tee_local $20
       (call $_Znwj
        (i32.const 16)
       )
      )
      (get_local $8)
     )
     (i64.store offset=8
      (get_local $20)
      (get_local $21)
     )
     (i32.store
      (tee_local $11
       (i32.add
        (get_local $24)
        (i32.const 64)
       )
      )
      (i32.const 0)
     )
     (i32.store
      (get_local $9)
      (tee_local $12
       (i32.add
        (get_local $20)
        (i32.const 16)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $24)
       (i32.const 52)
      )
      (get_local $12)
     )
     (i32.store offset=48
      (get_local $24)
      (get_local $20)
     )
     (i32.store offset=60
      (get_local $24)
      (i32.const 0)
     )
     (i32.store
      (i32.add
       (get_local $24)
       (i32.const 68)
      )
      (i32.const 0)
     )
     (call $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj
      (i32.add
       (get_local $24)
       (i32.const 60)
      )
      (i32.const 8)
     )
     (call $eosio_assert
      (i32.gt_s
       (i32.sub
        (i32.load
         (get_local $11)
        )
        (tee_local $20
         (i32.load offset=60
          (get_local $24)
         )
        )
       )
       (i32.const 7)
      )
      (i32.const 208)
     )
     (drop
      (call $memcpy
       (get_local $20)
       (i32.add
        (get_local $24)
        (i32.const 72)
       )
       (i32.const 8)
      )
     )
     (call $_ZN5eosio4packINS_6actionEEENSt3__16vectorIcNS2_9allocatorIcEEEERKT_
      (i32.add
       (get_local $24)
       (i32.const 8)
      )
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
     )
     (call $send_inline
      (tee_local $20
       (i32.load offset=8
        (get_local $24)
       )
      )
      (i32.sub
       (i32.load offset=12
        (get_local $24)
       )
       (get_local $20)
      )
     )
     (block $label$75
      (br_if $label$75
       (i32.eqz
        (tee_local $20
         (i32.load offset=8
          (get_local $24)
         )
        )
       )
      )
      (i32.store offset=12
       (get_local $24)
       (get_local $20)
      )
      (call $_ZdlPv
       (get_local $20)
      )
     )
     (block $label$76
      (br_if $label$76
       (i32.eqz
        (tee_local $20
         (i32.load offset=60
          (get_local $24)
         )
        )
       )
      )
      (i32.store
       (i32.add
        (get_local $24)
        (i32.const 64)
       )
       (get_local $20)
      )
      (call $_ZdlPv
       (get_local $20)
      )
     )
     (block $label$77
      (br_if $label$77
       (i32.eqz
        (tee_local $20
         (i32.load offset=48
          (get_local $24)
         )
        )
       )
      )
      (i32.store
       (i32.add
        (get_local $24)
        (i32.const 52)
       )
       (get_local $20)
      )
      (call $_ZdlPv
       (get_local $20)
      )
     )
     (set_local $20
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
     )
     (br $label$31)
    )
    (set_local $16
     (i32.add
      (get_local $10)
      (i32.const 24)
     )
    )
    (set_local $18
     (i32.add
      (get_local $10)
      (i32.const 16)
     )
    )
    (set_local $6
     (i32.add
      (get_local $10)
      (i32.const 8)
     )
    )
    (set_local $17
     (i32.add
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (i32.const 24)
     )
    )
    (set_local $19
     (i32.add
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (i32.const 16)
     )
    )
    (set_local $7
     (i32.or
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (i32.const 8)
     )
    )
    (set_local $20
     (i32.add
      (get_local $24)
      (i32.const 32)
     )
    )
   )
   (call $eosio_assert
    (i32.ne
     (get_local $10)
     (i32.const 0)
    )
    (i32.const 480)
   )
   (call $eosio_assert
    (i32.eq
     (i32.load
      (i32.add
       (get_local $10)
       (i32.const 32)
      )
     )
     (i32.add
      (get_local $24)
      (i32.const 200)
     )
    )
    (i32.const 32)
   )
   (call $eosio_assert
    (i64.eq
     (i64.load offset=200
      (get_local $24)
     )
     (call $current_receiver)
    )
    (i32.const 80)
   )
   (i64.store
    (tee_local $9
     (i32.add
      (get_local $10)
      (i32.const 16)
     )
    )
    (i64.add
     (i64.load
      (get_local $9)
     )
     (get_local $4)
    )
   )
   (i64.store
    (tee_local $9
     (i32.add
      (get_local $10)
      (i32.const 8)
     )
    )
    (i64.add
     (i64.load
      (get_local $9)
     )
     (get_local $5)
    )
   )
   (set_local $1
    (i64.load
     (get_local $10)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 144)
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (get_local $20)
     (get_local $10)
     (i32.const 8)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (get_local $7)
     (get_local $6)
     (i32.const 8)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (get_local $19)
     (get_local $18)
     (i32.const 8)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (get_local $17)
     (get_local $16)
     (i32.const 8)
    )
   )
   (call $db_update_i64
    (i32.load
     (i32.add
      (get_local $10)
      (i32.const 36)
     )
    )
    (i64.const 0)
    (get_local $20)
    (i32.const 32)
   )
   (block $label$78
    (br_if $label$78
     (i64.lt_u
      (get_local $1)
      (i64.load
       (tee_local $20
        (i32.add
         (i32.add
          (get_local $24)
          (i32.const 200)
         )
         (i32.const 16)
        )
       )
      )
     )
    )
    (i64.store
     (get_local $20)
     (select
      (i64.const -2)
      (i64.add
       (get_local $1)
       (i64.const 1)
      )
      (i64.gt_u
       (get_local $1)
       (i64.const -3)
      )
     )
    )
   )
   (call $prints
    (i32.const 1648)
   )
   (call $printui
    (i64.load offset=8
     (get_local $13)
    )
   )
   (call $prints
    (i32.const 1664)
   )
   (call $printui
    (get_local $4)
   )
   (call $prints
    (i32.const 1680)
   )
   (call $printui
    (get_local $15)
   )
   (set_local $1
    (i64.load32_u
     (tee_local $20
      (i32.add
       (get_local $14)
       (i32.const 8)
      )
     )
    )
   )
   (call $prints
    (i32.const 1712)
   )
   (call $printui
    (get_local $1)
   )
   (call $eosio_assert
    (i32.ne
     (get_local $14)
     (i32.const 0)
    )
    (i32.const 480)
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=32
      (get_local $14)
     )
     (i32.add
      (get_local $24)
      (i32.const 144)
     )
    )
    (i32.const 32)
   )
   (call $eosio_assert
    (i64.eq
     (i64.load offset=144
      (get_local $24)
     )
     (call $current_receiver)
    )
    (i32.const 80)
   )
   (i64.store
    (get_local $20)
    (i64.sub
     (i64.load
      (get_local $20)
     )
     (tee_local $3
      (i64.add
       (get_local $15)
       (get_local $4)
      )
     )
    )
   )
   (set_local $1
    (i64.load
     (get_local $14)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 144)
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.add
      (get_local $24)
      (i32.const 32)
     )
     (get_local $14)
     (i32.const 8)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.or
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (i32.const 8)
     )
     (get_local $20)
     (i32.const 8)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.add
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (i32.const 16)
     )
     (i32.add
      (get_local $14)
      (i32.const 16)
     )
     (i32.const 1)
    )
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 208)
   )
   (drop
    (call $memcpy
     (i32.add
      (get_local $24)
      (i32.const 49)
     )
     (i32.add
      (get_local $14)
      (i32.const 24)
     )
     (i32.const 8)
    )
   )
   (call $db_update_i64
    (i32.load offset=36
     (get_local $14)
    )
    (i64.const 0)
    (i32.add
     (get_local $24)
     (i32.const 32)
    )
    (i32.const 25)
   )
   (block $label$79
    (br_if $label$79
     (i64.lt_u
      (get_local $1)
      (i64.load
       (i32.add
        (i32.add
         (get_local $24)
         (i32.const 144)
        )
        (i32.const 16)
       )
      )
     )
    )
    (i64.store
     (i32.add
      (get_local $24)
      (i32.const 160)
     )
     (select
      (i64.const -2)
      (i64.add
       (get_local $1)
       (i64.const 1)
      )
      (i64.gt_u
       (get_local $1)
       (i64.const -3)
      )
     )
    )
   )
   (set_local $1
    (i64.load32_u
     (tee_local $20
      (i32.add
       (get_local $14)
       (i32.const 8)
      )
     )
    )
   )
   (call $prints
    (i32.const 1744)
   )
   (call $printui
    (get_local $1)
   )
   (i64.store offset=8
    (get_local $24)
    (tee_local $4
     (i64.load
      (get_local $0)
     )
    )
   )
   (i64.store offset=16
    (get_local $24)
    (i64.load offset=24
     (get_local $14)
    )
   )
   (i64.store offset=24
    (get_local $24)
    (i64.load
     (get_local $20)
    )
   )
   (block $label$80
    (br_if $label$80
     (i64.eqz
      (get_local $3)
     )
    )
    (set_local $9
     (i32.add
      (get_local $24)
      (i32.const 24)
     )
    )
    (set_local $14
     (i32.add
      (i32.add
       (get_local $24)
       (i32.const 8)
      )
      (i32.const 8)
     )
    )
    (set_local $1
     (i64.const 0)
    )
    (set_local $2
     (i64.const 59)
    )
    (set_local $20
     (i32.const 528)
    )
    (set_local $21
     (i64.const 0)
    )
    (loop $label$81
     (block $label$82
      (block $label$83
       (block $label$84
        (block $label$85
         (block $label$86
          (br_if $label$86
           (i64.gt_u
            (get_local $1)
            (i64.const 5)
           )
          )
          (br_if $label$85
           (i32.gt_u
            (i32.and
             (i32.add
              (tee_local $10
               (i32.load8_s
                (get_local $20)
               )
              )
              (i32.const -97)
             )
             (i32.const 255)
            )
            (i32.const 25)
           )
          )
          (set_local $10
           (i32.add
            (get_local $10)
            (i32.const 165)
           )
          )
          (br $label$84)
         )
         (set_local $3
          (i64.const 0)
         )
         (br_if $label$83
          (i64.le_u
           (get_local $1)
           (i64.const 11)
          )
         )
         (br $label$82)
        )
        (set_local $10
         (select
          (i32.add
           (get_local $10)
           (i32.const 208)
          )
          (i32.const 0)
          (i32.lt_u
           (i32.and
            (i32.add
             (get_local $10)
             (i32.const -49)
            )
            (i32.const 255)
           )
           (i32.const 5)
          )
         )
        )
       )
       (set_local $3
        (i64.shr_s
         (i64.shl
          (i64.extend_u/i32
           (get_local $10)
          )
          (i64.const 56)
         )
         (i64.const 56)
        )
       )
      )
      (set_local $3
       (i64.shl
        (i64.and
         (get_local $3)
         (i64.const 31)
        )
        (i64.and
         (get_local $2)
         (i64.const 4294967295)
        )
       )
      )
     )
     (set_local $20
      (i32.add
       (get_local $20)
       (i32.const 1)
      )
     )
     (set_local $1
      (i64.add
       (get_local $1)
       (i64.const 1)
      )
     )
     (set_local $21
      (i64.or
       (get_local $3)
       (get_local $21)
      )
     )
     (br_if $label$81
      (i64.ne
       (tee_local $2
        (i64.add
         (get_local $2)
         (i64.const -5)
        )
       )
       (i64.const -6)
      )
     )
    )
    (set_local $1
     (i64.const 0)
    )
    (set_local $2
     (i64.const 59)
    )
    (set_local $20
     (i32.const 1792)
    )
    (set_local $22
     (i64.const 0)
    )
    (loop $label$87
     (block $label$88
      (block $label$89
       (block $label$90
        (block $label$91
         (block $label$92
          (br_if $label$92
           (i64.gt_u
            (get_local $1)
            (i64.const 3)
           )
          )
          (br_if $label$91
           (i32.gt_u
            (i32.and
             (i32.add
              (tee_local $10
               (i32.load8_s
                (get_local $20)
               )
              )
              (i32.const -97)
             )
             (i32.const 255)
            )
            (i32.const 25)
           )
          )
          (set_local $10
           (i32.add
            (get_local $10)
            (i32.const 165)
           )
          )
          (br $label$90)
         )
         (set_local $3
          (i64.const 0)
         )
         (br_if $label$89
          (i64.le_u
           (get_local $1)
           (i64.const 11)
          )
         )
         (br $label$88)
        )
        (set_local $10
         (select
          (i32.add
           (get_local $10)
           (i32.const 208)
          )
          (i32.const 0)
          (i32.lt_u
           (i32.and
            (i32.add
             (get_local $10)
             (i32.const -49)
            )
            (i32.const 255)
           )
           (i32.const 5)
          )
         )
        )
       )
       (set_local $3
        (i64.shr_s
         (i64.shl
          (i64.extend_u/i32
           (get_local $10)
          )
          (i64.const 56)
         )
         (i64.const 56)
        )
       )
      )
      (set_local $3
       (i64.shl
        (i64.and
         (get_local $3)
         (i64.const 31)
        )
        (i64.and
         (get_local $2)
         (i64.const 4294967295)
        )
       )
      )
     )
     (set_local $20
      (i32.add
       (get_local $20)
       (i32.const 1)
      )
     )
     (set_local $1
      (i64.add
       (get_local $1)
       (i64.const 1)
      )
     )
     (set_local $22
      (i64.or
       (get_local $3)
       (get_local $22)
      )
     )
     (br_if $label$87
      (i64.ne
       (tee_local $2
        (i64.add
         (get_local $2)
         (i64.const -5)
        )
       )
       (i64.const -6)
      )
     )
    )
    (set_local $1
     (i64.const 0)
    )
    (set_local $2
     (i64.const 59)
    )
    (set_local $20
     (i32.const 1808)
    )
    (set_local $23
     (i64.const 0)
    )
    (loop $label$93
     (block $label$94
      (block $label$95
       (block $label$96
        (block $label$97
         (block $label$98
          (br_if $label$98
           (i64.gt_u
            (get_local $1)
            (i64.const 4)
           )
          )
          (br_if $label$97
           (i32.gt_u
            (i32.and
             (i32.add
              (tee_local $10
               (i32.load8_s
                (get_local $20)
               )
              )
              (i32.const -97)
             )
             (i32.const 255)
            )
            (i32.const 25)
           )
          )
          (set_local $10
           (i32.add
            (get_local $10)
            (i32.const 165)
           )
          )
          (br $label$96)
         )
         (set_local $3
          (i64.const 0)
         )
         (br_if $label$95
          (i64.le_u
           (get_local $1)
           (i64.const 11)
          )
         )
         (br $label$94)
        )
        (set_local $10
         (select
          (i32.add
           (get_local $10)
           (i32.const 208)
          )
          (i32.const 0)
          (i32.lt_u
           (i32.and
            (i32.add
             (get_local $10)
             (i32.const -49)
            )
            (i32.const 255)
           )
           (i32.const 5)
          )
         )
        )
       )
       (set_local $3
        (i64.shr_s
         (i64.shl
          (i64.extend_u/i32
           (get_local $10)
          )
          (i64.const 56)
         )
         (i64.const 56)
        )
       )
      )
      (set_local $3
       (i64.shl
        (i64.and
         (get_local $3)
         (i64.const 31)
        )
        (i64.and
         (get_local $2)
         (i64.const 4294967295)
        )
       )
      )
     )
     (set_local $20
      (i32.add
       (get_local $20)
       (i32.const 1)
      )
     )
     (set_local $1
      (i64.add
       (get_local $1)
       (i64.const 1)
      )
     )
     (set_local $23
      (i64.or
       (get_local $3)
       (get_local $23)
      )
     )
     (br_if $label$93
      (i64.ne
       (tee_local $2
        (i64.add
         (get_local $2)
         (i64.const -5)
        )
       )
       (i64.const -6)
      )
     )
    )
    (i64.store offset=40
     (get_local $24)
     (get_local $23)
    )
    (i64.store offset=32
     (get_local $24)
     (get_local $22)
    )
    (i64.store
     (tee_local $20
      (call $_Znwj
       (i32.const 16)
      )
     )
     (get_local $4)
    )
    (i64.store offset=8
     (get_local $20)
     (get_local $21)
    )
    (i32.store
     (tee_local $10
      (i32.add
       (get_local $24)
       (i32.const 64)
      )
     )
     (i32.const 0)
    )
    (i32.store
     (i32.add
      (i32.add
       (get_local $24)
       (i32.const 32)
      )
      (i32.const 24)
     )
     (tee_local $0
      (i32.add
       (get_local $20)
       (i32.const 16)
      )
     )
    )
    (i32.store
     (i32.add
      (get_local $24)
      (i32.const 52)
     )
     (get_local $0)
    )
    (i32.store offset=48
     (get_local $24)
     (get_local $20)
    )
    (i32.store offset=60
     (get_local $24)
     (i32.const 0)
    )
    (i32.store
     (i32.add
      (get_local $24)
      (i32.const 68)
     )
     (i32.const 0)
    )
    (call $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj
     (i32.add
      (get_local $24)
      (i32.const 60)
     )
     (i32.const 24)
    )
    (call $eosio_assert
     (i32.gt_s
      (tee_local $10
       (i32.sub
        (i32.load
         (get_local $10)
        )
        (tee_local $20
         (i32.load offset=60
          (get_local $24)
         )
        )
       )
      )
      (i32.const 7)
     )
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (get_local $20)
      (i32.add
       (get_local $24)
       (i32.const 8)
      )
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.gt_s
      (i32.add
       (get_local $10)
       (i32.const -8)
      )
      (i32.const 7)
     )
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (get_local $20)
       (i32.const 8)
      )
      (get_local $14)
      (i32.const 8)
     )
    )
    (call $eosio_assert
     (i32.gt_s
      (i32.add
       (get_local $10)
       (i32.const -16)
      )
      (i32.const 7)
     )
     (i32.const 208)
    )
    (drop
     (call $memcpy
      (i32.add
       (get_local $20)
       (i32.const 16)
      )
      (get_local $9)
      (i32.const 8)
     )
    )
    (call $_ZN5eosio4packINS_6actionEEENSt3__16vectorIcNS2_9allocatorIcEEEERKT_
     (i32.add
      (get_local $24)
      (i32.const 272)
     )
     (i32.add
      (get_local $24)
      (i32.const 32)
     )
    )
    (call $send_inline
     (tee_local $20
      (i32.load offset=272
       (get_local $24)
      )
     )
     (i32.sub
      (i32.load offset=276
       (get_local $24)
      )
      (get_local $20)
     )
    )
    (block $label$99
     (br_if $label$99
      (i32.eqz
       (tee_local $20
        (i32.load offset=272
         (get_local $24)
        )
       )
      )
     )
     (i32.store offset=276
      (get_local $24)
      (get_local $20)
     )
     (call $_ZdlPv
      (get_local $20)
     )
    )
    (block $label$100
     (br_if $label$100
      (i32.eqz
       (tee_local $20
        (i32.load offset=60
         (get_local $24)
        )
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $24)
       (i32.const 64)
      )
      (get_local $20)
     )
     (call $_ZdlPv
      (get_local $20)
     )
    )
    (br_if $label$80
     (i32.eqz
      (tee_local $20
       (i32.load offset=48
        (get_local $24)
       )
      )
     )
    )
    (i32.store
     (i32.add
      (get_local $24)
      (i32.const 52)
     )
     (get_local $20)
    )
    (call $_ZdlPv
     (get_local $20)
    )
   )
   (block $label$101
    (br_if $label$101
     (i32.eqz
      (tee_local $9
       (i32.load offset=168
        (get_local $24)
       )
      )
     )
    )
    (block $label$102
     (block $label$103
      (br_if $label$103
       (i32.eq
        (tee_local $20
         (i32.load
          (tee_local $14
           (i32.add
            (get_local $24)
            (i32.const 172)
           )
          )
         )
        )
        (get_local $9)
       )
      )
      (loop $label$104
       (set_local $10
        (i32.load
         (tee_local $20
          (i32.add
           (get_local $20)
           (i32.const -24)
          )
         )
        )
       )
       (i32.store
        (get_local $20)
        (i32.const 0)
       )
       (block $label$105
        (br_if $label$105
         (i32.eqz
          (get_local $10)
         )
        )
        (call $_ZdlPv
         (get_local $10)
        )
       )
       (br_if $label$104
        (i32.ne
         (get_local $9)
         (get_local $20)
        )
       )
      )
      (set_local $20
       (i32.load
        (i32.add
         (get_local $24)
         (i32.const 168)
        )
       )
      )
      (br $label$102)
     )
     (set_local $20
      (get_local $9)
     )
    )
    (i32.store
     (get_local $14)
     (get_local $9)
    )
    (call $_ZdlPv
     (get_local $20)
    )
   )
   (block $label$106
    (br_if $label$106
     (i32.eqz
      (tee_local $9
       (i32.load offset=224
        (get_local $24)
       )
      )
     )
    )
    (block $label$107
     (block $label$108
      (br_if $label$108
       (i32.eq
        (tee_local $20
         (i32.load
          (tee_local $14
           (i32.add
            (get_local $24)
            (i32.const 228)
           )
          )
         )
        )
        (get_local $9)
       )
      )
      (loop $label$109
       (set_local $10
        (i32.load
         (tee_local $20
          (i32.add
           (get_local $20)
           (i32.const -24)
          )
         )
        )
       )
       (i32.store
        (get_local $20)
        (i32.const 0)
       )
       (block $label$110
        (br_if $label$110
         (i32.eqz
          (get_local $10)
         )
        )
        (call $_ZdlPv
         (get_local $10)
        )
       )
       (br_if $label$109
        (i32.ne
         (get_local $9)
         (get_local $20)
        )
       )
      )
      (set_local $20
       (i32.load
        (i32.add
         (get_local $24)
         (i32.const 224)
        )
       )
      )
      (br $label$107)
     )
     (set_local $20
      (get_local $9)
     )
    )
    (i32.store
     (get_local $14)
     (get_local $9)
    )
    (call $_ZdlPv
     (get_local $20)
    )
   )
   (block $label$111
    (br_if $label$111
     (i32.eqz
      (i32.and
       (i32.load8_u offset=240
        (get_local $24)
       )
       (i32.const 1)
      )
     )
    )
    (call $_ZdlPv
     (i32.load offset=248
      (get_local $24)
     )
    )
   )
   (block $label$112
    (br_if $label$112
     (i32.eqz
      (i32.and
       (i32.load8_u offset=256
        (get_local $24)
       )
       (i32.const 1)
      )
     )
    )
    (call $_ZdlPv
     (i32.load
      (i32.add
       (get_local $24)
       (i32.const 264)
      )
     )
    )
   )
   (i32.store offset=4
    (i32.const 0)
    (i32.add
     (get_local $24)
     (i32.const 288)
    )
   )
   (return)
  )
  (call $_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv
   (i32.add
    (get_local $24)
    (i32.const 240)
   )
  )
  (unreachable)
 )
 (func $apply (param $0 i64) (param $1 i64) (param $2 i64)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $9
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 176)
    )
   )
  )
  (set_local $6
   (i64.const 0)
  )
  (set_local $5
   (i64.const 59)
  )
  (set_local $4
   (i32.const 1824)
  )
  (set_local $7
   (i64.const 0)
  )
  (loop $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (br_if $label$5
         (i64.gt_u
          (get_local $6)
          (i64.const 6)
         )
        )
        (br_if $label$4
         (i32.gt_u
          (i32.and
           (i32.add
            (tee_local $3
             (i32.load8_s
              (get_local $4)
             )
            )
            (i32.const -97)
           )
           (i32.const 255)
          )
          (i32.const 25)
         )
        )
        (set_local $3
         (i32.add
          (get_local $3)
          (i32.const 165)
         )
        )
        (br $label$3)
       )
       (set_local $8
        (i64.const 0)
       )
       (br_if $label$2
        (i64.le_u
         (get_local $6)
         (i64.const 11)
        )
       )
       (br $label$1)
      )
      (set_local $3
       (select
        (i32.add
         (get_local $3)
         (i32.const 208)
        )
        (i32.const 0)
        (i32.lt_u
         (i32.and
          (i32.add
           (get_local $3)
           (i32.const -49)
          )
          (i32.const 255)
         )
         (i32.const 5)
        )
       )
      )
     )
     (set_local $8
      (i64.shr_s
       (i64.shl
        (i64.extend_u/i32
         (get_local $3)
        )
        (i64.const 56)
       )
       (i64.const 56)
      )
     )
    )
    (set_local $8
     (i64.shl
      (i64.and
       (get_local $8)
       (i64.const 31)
      )
      (i64.and
       (get_local $5)
       (i64.const 4294967295)
      )
     )
    )
   )
   (set_local $4
    (i32.add
     (get_local $4)
     (i32.const 1)
    )
   )
   (set_local $6
    (i64.add
     (get_local $6)
     (i64.const 1)
    )
   )
   (set_local $7
    (i64.or
     (get_local $8)
     (get_local $7)
    )
   )
   (br_if $label$0
    (i64.ne
     (tee_local $5
      (i64.add
       (get_local $5)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (block $label$6
   (br_if $label$6
    (i64.ne
     (get_local $7)
     (get_local $2)
    )
   )
   (set_local $6
    (i64.const 0)
   )
   (set_local $5
    (i64.const 59)
   )
   (set_local $4
    (i32.const 1840)
   )
   (set_local $7
    (i64.const 0)
   )
   (loop $label$7
    (block $label$8
     (block $label$9
      (block $label$10
       (block $label$11
        (block $label$12
         (br_if $label$12
          (i64.gt_u
           (get_local $6)
           (i64.const 4)
          )
         )
         (br_if $label$11
          (i32.gt_u
           (i32.and
            (i32.add
             (tee_local $3
              (i32.load8_s
               (get_local $4)
              )
             )
             (i32.const -97)
            )
            (i32.const 255)
           )
           (i32.const 25)
          )
         )
         (set_local $3
          (i32.add
           (get_local $3)
           (i32.const 165)
          )
         )
         (br $label$10)
        )
        (set_local $8
         (i64.const 0)
        )
        (br_if $label$9
         (i64.le_u
          (get_local $6)
          (i64.const 11)
         )
        )
        (br $label$8)
       )
       (set_local $3
        (select
         (i32.add
          (get_local $3)
          (i32.const 208)
         )
         (i32.const 0)
         (i32.lt_u
          (i32.and
           (i32.add
            (get_local $3)
            (i32.const -49)
           )
           (i32.const 255)
          )
          (i32.const 5)
         )
        )
       )
      )
      (set_local $8
       (i64.shr_s
        (i64.shl
         (i64.extend_u/i32
          (get_local $3)
         )
         (i64.const 56)
        )
        (i64.const 56)
       )
      )
     )
     (set_local $8
      (i64.shl
       (i64.and
        (get_local $8)
        (i64.const 31)
       )
       (i64.and
        (get_local $5)
        (i64.const 4294967295)
       )
      )
     )
    )
    (set_local $4
     (i32.add
      (get_local $4)
      (i32.const 1)
     )
    )
    (set_local $6
     (i64.add
      (get_local $6)
      (i64.const 1)
     )
    )
    (set_local $7
     (i64.or
      (get_local $8)
      (get_local $7)
     )
    )
    (br_if $label$7
     (i64.ne
      (tee_local $5
       (i64.add
        (get_local $5)
        (i64.const -5)
       )
      )
      (i64.const -6)
     )
    )
   )
   (call $eosio_assert
    (i64.eq
     (get_local $7)
     (get_local $1)
    )
    (i32.const 1856)
   )
  )
  (block $label$13
   (block $label$14
    (br_if $label$14
     (i64.eq
      (get_local $1)
      (get_local $0)
     )
    )
    (set_local $6
     (i64.const 0)
    )
    (set_local $5
     (i64.const 59)
    )
    (set_local $4
     (i32.const 1824)
    )
    (set_local $7
     (i64.const 0)
    )
    (loop $label$15
     (block $label$16
      (block $label$17
       (block $label$18
        (block $label$19
         (block $label$20
          (br_if $label$20
           (i64.gt_u
            (get_local $6)
            (i64.const 6)
           )
          )
          (br_if $label$19
           (i32.gt_u
            (i32.and
             (i32.add
              (tee_local $3
               (i32.load8_s
                (get_local $4)
               )
              )
              (i32.const -97)
             )
             (i32.const 255)
            )
            (i32.const 25)
           )
          )
          (set_local $3
           (i32.add
            (get_local $3)
            (i32.const 165)
           )
          )
          (br $label$18)
         )
         (set_local $8
          (i64.const 0)
         )
         (br_if $label$17
          (i64.le_u
           (get_local $6)
           (i64.const 11)
          )
         )
         (br $label$16)
        )
        (set_local $3
         (select
          (i32.add
           (get_local $3)
           (i32.const 208)
          )
          (i32.const 0)
          (i32.lt_u
           (i32.and
            (i32.add
             (get_local $3)
             (i32.const -49)
            )
            (i32.const 255)
           )
           (i32.const 5)
          )
         )
        )
       )
       (set_local $8
        (i64.shr_s
         (i64.shl
          (i64.extend_u/i32
           (get_local $3)
          )
          (i64.const 56)
         )
         (i64.const 56)
        )
       )
      )
      (set_local $8
       (i64.shl
        (i64.and
         (get_local $8)
         (i64.const 31)
        )
        (i64.and
         (get_local $5)
         (i64.const 4294967295)
        )
       )
      )
     )
     (set_local $4
      (i32.add
       (get_local $4)
       (i32.const 1)
      )
     )
     (set_local $6
      (i64.add
       (get_local $6)
       (i64.const 1)
      )
     )
     (set_local $7
      (i64.or
       (get_local $8)
       (get_local $7)
      )
     )
     (br_if $label$15
      (i64.ne
       (tee_local $5
        (i64.add
         (get_local $5)
         (i64.const -5)
        )
       )
       (i64.const -6)
      )
     )
    )
    (br_if $label$13
     (i64.ne
      (get_local $7)
      (get_local $2)
     )
    )
   )
   (i64.store offset=168
    (get_local $9)
    (get_local $0)
   )
   (block $label$21
    (block $label$22
     (block $label$23
      (block $label$24
       (block $label$25
        (block $label$26
         (block $label$27
          (block $label$28
           (block $label$29
            (br_if $label$29
             (i64.gt_s
              (get_local $2)
              (i64.const 5031766152489992191)
             )
            )
            (br_if $label$28
             (i64.le_s
              (get_local $2)
              (i64.const -4369166278590464001)
             )
            )
            (br_if $label$26
             (i64.eq
              (get_local $2)
              (i64.const -4369166278590464000)
             )
            )
            (br_if $label$25
             (i64.eq
              (get_local $2)
              (i64.const -3020376800539705344)
             )
            )
            (br_if $label$13
             (i64.ne
              (get_local $2)
              (i64.const 3617210392855445504)
             )
            )
            (i32.store offset=156
             (get_local $9)
             (i32.const 0)
            )
            (i32.store offset=152
             (get_local $9)
             (i32.const 1)
            )
            (i64.store offset=16 align=4
             (get_local $9)
             (i64.load offset=152
              (get_local $9)
             )
            )
            (drop
             (call $_ZN5eosio14execute_actionI4repoS1_JyyyEEEbPT_MT0_FvDpT1_E
              (i32.add
               (get_local $9)
               (i32.const 168)
              )
              (i32.add
               (get_local $9)
               (i32.const 16)
              )
             )
            )
            (br $label$13)
           )
           (br_if $label$27
            (i64.le_s
             (get_local $2)
             (i64.const 7112157240185847807)
            )
           )
           (br_if $label$24
            (i64.eq
             (get_local $2)
             (i64.const 7112157240185847808)
            )
           )
           (br_if $label$23
            (i64.eq
             (get_local $2)
             (i64.const 7112162674393219072)
            )
           )
           (br_if $label$13
            (i64.ne
             (get_local $2)
             (i64.const 8419268397136609280)
            )
           )
           (i32.store offset=124
            (get_local $9)
            (i32.const 0)
           )
           (i32.store offset=120
            (get_local $9)
            (i32.const 2)
           )
           (i64.store offset=48 align=4
            (get_local $9)
            (i64.load offset=120
             (get_local $9)
            )
           )
           (drop
            (call $_ZN5eosio14execute_actionI4repoS1_JhEEEbPT_MT0_FvDpT1_E
             (i32.add
              (get_local $9)
              (i32.const 168)
             )
             (i32.add
              (get_local $9)
              (i32.const 48)
             )
            )
           )
           (br $label$13)
          )
          (br_if $label$22
           (i64.eq
            (get_local $2)
            (i64.const -7297956456714567680)
           )
          )
          (br_if $label$13
           (i64.ne
            (get_local $2)
            (i64.const -5001399798566047872)
           )
          )
          (i32.store offset=116
           (get_local $9)
           (i32.const 0)
          )
          (i32.store offset=112
           (get_local $9)
           (i32.const 3)
          )
          (i64.store offset=56 align=4
           (get_local $9)
           (i64.load offset=112
            (get_local $9)
           )
          )
          (drop
           (call $_ZN5eosio14execute_actionI4repoS1_JyEEEbPT_MT0_FvDpT1_E
            (i32.add
             (get_local $9)
             (i32.const 168)
            )
            (i32.add
             (get_local $9)
             (i32.const 56)
            )
           )
          )
          (br $label$13)
         )
         (br_if $label$21
          (i64.eq
           (get_local $2)
           (i64.const 5031766152489992192)
          )
         )
         (br_if $label$13
          (i64.ne
           (get_local $2)
           (i64.const 7111898814688002048)
          )
         )
         (i32.store offset=148
          (get_local $9)
          (i32.const 0)
         )
         (i32.store offset=144
          (get_local $9)
          (i32.const 4)
         )
         (i64.store offset=24 align=4
          (get_local $9)
          (i64.load offset=144
           (get_local $9)
          )
         )
         (drop
          (call $_ZN5eosio14execute_actionI4repoS1_JNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEyEEEbPT_MT0_FvDpT1_E
           (i32.add
            (get_local $9)
            (i32.const 168)
           )
           (i32.add
            (get_local $9)
            (i32.const 24)
           )
          )
         )
         (br $label$13)
        )
        (i32.store offset=108
         (get_local $9)
         (i32.const 0)
        )
        (i32.store offset=104
         (get_local $9)
         (i32.const 5)
        )
        (i64.store offset=64 align=4
         (get_local $9)
         (i64.load offset=104
          (get_local $9)
         )
        )
        (drop
         (call $_ZN5eosio14execute_actionI4repoS1_JhEEEbPT_MT0_FvDpT1_E
          (i32.add
           (get_local $9)
           (i32.const 168)
          )
          (i32.add
           (get_local $9)
           (i32.const 64)
          )
         )
        )
        (br $label$13)
       )
       (i32.store offset=100
        (get_local $9)
        (i32.const 0)
       )
       (i32.store offset=96
        (get_local $9)
        (i32.const 6)
       )
       (i64.store offset=72 align=4
        (get_local $9)
        (i64.load offset=96
         (get_local $9)
        )
       )
       (drop
        (call $_ZN5eosio14execute_actionI4repoS1_JyEEEbPT_MT0_FvDpT1_E
         (i32.add
          (get_local $9)
          (i32.const 168)
         )
         (i32.add
          (get_local $9)
          (i32.const 72)
         )
        )
       )
       (br $label$13)
      )
      (i32.store offset=140
       (get_local $9)
       (i32.const 0)
      )
      (i32.store offset=136
       (get_local $9)
       (i32.const 7)
      )
      (i64.store offset=32 align=4
       (get_local $9)
       (i64.load offset=136
        (get_local $9)
       )
      )
      (drop
       (call $_ZN5eosio14execute_actionI4repoS1_JNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEyEEEbPT_MT0_FvDpT1_E
        (i32.add
         (get_local $9)
         (i32.const 168)
        )
        (i32.add
         (get_local $9)
         (i32.const 32)
        )
       )
      )
      (br $label$13)
     )
     (i32.store offset=92
      (get_local $9)
      (i32.const 0)
     )
     (i32.store offset=88
      (get_local $9)
      (i32.const 8)
     )
     (i64.store offset=80 align=4
      (get_local $9)
      (i64.load offset=88
       (get_local $9)
      )
     )
     (drop
      (call $_ZN5eosio14execute_actionI4repoS1_JyEEEbPT_MT0_FvDpT1_E
       (i32.add
        (get_local $9)
        (i32.const 168)
       )
       (i32.add
        (get_local $9)
        (i32.const 80)
       )
      )
     )
     (br $label$13)
    )
    (i32.store offset=132
     (get_local $9)
     (i32.const 0)
    )
    (i32.store offset=128
     (get_local $9)
     (i32.const 9)
    )
    (i64.store offset=40 align=4
     (get_local $9)
     (i64.load offset=128
      (get_local $9)
     )
    )
    (drop
     (call $_ZN5eosio14execute_actionI4repoS1_JyEEEbPT_MT0_FvDpT1_E
      (i32.add
       (get_local $9)
       (i32.const 168)
      )
      (i32.add
       (get_local $9)
       (i32.const 40)
      )
     )
    )
    (br $label$13)
   )
   (i32.store offset=164
    (get_local $9)
    (i32.const 0)
   )
   (i32.store offset=160
    (get_local $9)
    (i32.const 10)
   )
   (i64.store offset=8 align=4
    (get_local $9)
    (i64.load offset=160
     (get_local $9)
    )
   )
   (drop
    (call $_ZN5eosio14execute_actionI4repoS1_JyyNSt3__16vectorINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEENS7_IS9_EEEENS3_IyNS7_IyEEEESD_SD_SD_yEEEbPT_MT0_FvDpT1_E
     (i32.add
      (get_local $9)
      (i32.const 168)
     )
     (i32.add
      (get_local $9)
      (i32.const 8)
     )
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $9)
    (i32.const 176)
   )
  )
 )
 (func $_ZN5eosio14execute_actionI4repoS1_JyyNSt3__16vectorINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEENS7_IS9_EEEENS3_IyNS7_IyEEEESD_SD_SD_yEEEbPT_MT0_FvDpT1_E (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $2
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 144)
    )
   )
  )
  (i32.store offset=108
   (tee_local $4
    (get_local $2)
   )
   (get_local $0)
  )
  (i32.store offset=96
   (get_local $4)
   (i32.load
    (get_local $1)
   )
  )
  (i32.store offset=100
   (get_local $4)
   (i32.load offset=4
    (get_local $1)
   )
  )
  (set_local $1
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (tee_local $0
      (call $action_data_size)
     )
    )
   )
   (block $label$1
    (block $label$2
     (br_if $label$2
      (i32.lt_u
       (get_local $0)
       (i32.const 513)
      )
     )
     (set_local $1
      (call $malloc
       (get_local $0)
      )
     )
     (br $label$1)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $1
      (i32.sub
       (get_local $2)
       (i32.and
        (i32.add
         (get_local $0)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $read_action_data
     (get_local $1)
     (get_local $0)
    )
   )
  )
  (i64.store
   (i32.add
    (get_local $4)
    (i32.const 32)
   )
   (i64.const 0)
  )
  (i64.store
   (i32.add
    (get_local $4)
    (i32.const 40)
   )
   (i64.const 0)
  )
  (i64.store offset=16
   (get_local $4)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $4)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $4)
   (i64.const 0)
  )
  (i32.store offset=48
   (get_local $4)
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (get_local $4)
    (i32.const 52)
   )
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (get_local $4)
    (i32.const 56)
   )
   (i32.const 0)
  )
  (i32.store offset=60
   (get_local $4)
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (get_local $4)
    (i32.const 64)
   )
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (get_local $4)
    (i32.const 68)
   )
   (i32.const 0)
  )
  (i32.store offset=72
   (get_local $4)
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (get_local $4)
    (i32.const 76)
   )
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (get_local $4)
    (i32.const 80)
   )
   (i32.const 0)
  )
  (i64.store offset=88
   (get_local $4)
   (i64.const 0)
  )
  (i32.store offset=116
   (get_local $4)
   (get_local $1)
  )
  (i32.store offset=112
   (get_local $4)
   (get_local $1)
  )
  (i32.store offset=120
   (get_local $4)
   (i32.add
    (get_local $1)
    (get_local $0)
   )
  )
  (i32.store offset=128
   (get_local $4)
   (i32.add
    (get_local $4)
    (i32.const 112)
   )
  )
  (i32.store offset=136
   (get_local $4)
   (i32.add
    (get_local $4)
    (i32.const 8)
   )
  )
  (call $_ZN5boost6fusion6detail17for_each_unrolledILi8EE4callINS0_18std_tuple_iteratorINSt3__15tupleIJyyNS6_6vectorINS6_12basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEENSC_ISE_EEEENS8_IyNSC_IyEEEESI_SI_SI_yEEELi0EEEZN5eosiorsINSL_10datastreamIPKcEEJyySG_SI_SI_SI_SI_yEEERT_SS_RNS7_IJDpT0_EEEEUlSS_E_EEvRKSR_RKT0_
   (i32.add
    (get_local $4)
    (i32.const 136)
   )
   (i32.add
    (get_local $4)
    (i32.const 128)
   )
  )
  (block $label$3
   (br_if $label$3
    (i32.lt_u
     (get_local $0)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $1)
   )
  )
  (i32.store offset=116
   (get_local $4)
   (i32.add
    (get_local $4)
    (i32.const 96)
   )
  )
  (i32.store offset=112
   (get_local $4)
   (i32.add
    (get_local $4)
    (i32.const 108)
   )
  )
  (call $_ZN5boost4mp116detail16tuple_apply_implIRZN5eosio14execute_actionI4repoS5_JyyNSt3__16vectorINS6_12basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEENSB_ISD_EEEENS7_IyNSB_IyEEEESH_SH_SH_yEEEbPT_MT0_FvDpT1_EEUlDpT_E_RNS6_5tupleIJyySF_SH_SH_SH_SH_yEEEJLj0ELj1ELj2ELj3ELj4ELj5ELj6ELj7EEEEDTclclsr3stdE7forwardISI_Efp_Espclsr3stdE3getIXT1_EEclsr3stdE7forwardISK_Efp0_EEEEOSI_OSK_NS0_16integer_sequenceIjJXspT1_EEEE
   (i32.add
    (get_local $4)
    (i32.const 112)
   )
   (i32.add
    (get_local $4)
    (i32.const 8)
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (tee_local $1
      (i32.load
       (i32.add
        (get_local $4)
        (i32.const 72)
       )
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $4)
     (i32.const 76)
    )
    (get_local $1)
   )
   (call $_ZdlPv
    (get_local $1)
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.eqz
     (tee_local $1
      (i32.load
       (i32.add
        (get_local $4)
        (i32.const 60)
       )
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $4)
     (i32.const 64)
    )
    (get_local $1)
   )
   (call $_ZdlPv
    (get_local $1)
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (tee_local $1
      (i32.load
       (i32.add
        (get_local $4)
        (i32.const 48)
       )
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $4)
     (i32.const 52)
    )
    (get_local $1)
   )
   (call $_ZdlPv
    (get_local $1)
   )
  )
  (block $label$7
   (br_if $label$7
    (i32.eqz
     (tee_local $1
      (i32.load
       (i32.add
        (get_local $4)
        (i32.const 36)
       )
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $4)
     (i32.const 40)
    )
    (get_local $1)
   )
   (call $_ZdlPv
    (get_local $1)
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.eqz
     (tee_local $2
      (i32.load offset=24
       (get_local $4)
      )
     )
    )
   )
   (block $label$9
    (block $label$10
     (br_if $label$10
      (i32.eq
       (tee_local $1
        (i32.load
         (tee_local $3
          (i32.add
           (get_local $4)
           (i32.const 28)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (set_local $0
      (i32.sub
       (i32.const 0)
       (get_local $2)
      )
     )
     (set_local $1
      (i32.add
       (get_local $1)
       (i32.const -12)
      )
     )
     (loop $label$11
      (block $label$12
       (br_if $label$12
        (i32.eqz
         (i32.and
          (i32.load8_u
           (get_local $1)
          )
          (i32.const 1)
         )
        )
       )
       (call $_ZdlPv
        (i32.load
         (i32.add
          (get_local $1)
          (i32.const 8)
         )
        )
       )
      )
      (br_if $label$11
       (i32.ne
        (i32.add
         (tee_local $1
          (i32.add
           (get_local $1)
           (i32.const -12)
          )
         )
         (get_local $0)
        )
        (i32.const -12)
       )
      )
     )
     (set_local $1
      (i32.load
       (i32.add
        (get_local $4)
        (i32.const 24)
       )
      )
     )
     (br $label$9)
    )
    (set_local $1
     (get_local $2)
    )
   )
   (i32.store
    (get_local $3)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $1)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $4)
    (i32.const 144)
   )
  )
  (i32.const 1)
 )
 (func $_ZN5eosio14execute_actionI4repoS1_JyyyEEEbPT_MT0_FvDpT1_E (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (set_local $10
   (tee_local $8
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 32)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $8)
  )
  (set_local $2
   (i32.load offset=4
    (get_local $1)
   )
  )
  (set_local $9
   (i32.load
    (get_local $1)
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.eqz
        (tee_local $1
         (call $action_data_size)
        )
       )
      )
      (br_if $label$2
       (i32.lt_u
        (get_local $1)
        (i32.const 513)
       )
      )
      (set_local $8
       (call $malloc
        (get_local $1)
       )
      )
      (br $label$1)
     )
     (set_local $8
      (i32.const 0)
     )
     (br $label$0)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $8
      (i32.sub
       (get_local $8)
       (i32.and
        (i32.add
         (get_local $1)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $read_action_data
     (get_local $8)
     (get_local $1)
    )
   )
  )
  (i64.store offset=16
   (get_local $10)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $10)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $10)
   (i64.const 0)
  )
  (call $eosio_assert
   (i32.gt_u
    (get_local $1)
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $10)
     (i32.const 8)
    )
    (get_local $8)
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.ne
    (tee_local $6
     (i32.and
      (get_local $1)
      (i32.const -8)
     )
    )
    (i32.const 8)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (tee_local $7
     (i32.add
      (i32.add
       (get_local $10)
       (i32.const 8)
      )
      (i32.const 8)
     )
    )
    (i32.add
     (get_local $8)
     (i32.const 8)
    )
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.ne
    (get_local $6)
    (i32.const 16)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (tee_local $6
     (i32.add
      (i32.add
       (get_local $10)
       (i32.const 8)
      )
      (i32.const 16)
     )
    )
    (i32.add
     (get_local $8)
     (i32.const 16)
    )
    (i32.const 8)
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.lt_u
     (get_local $1)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $8)
   )
  )
  (set_local $1
   (i32.add
    (get_local $0)
    (i32.shr_s
     (get_local $2)
     (i32.const 1)
    )
   )
  )
  (set_local $5
   (i64.load
    (get_local $6)
   )
  )
  (set_local $4
   (i64.load
    (get_local $7)
   )
  )
  (set_local $3
   (i64.load offset=8
    (get_local $10)
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.eqz
     (i32.and
      (get_local $2)
      (i32.const 1)
     )
    )
   )
   (set_local $9
    (i32.load
     (i32.add
      (i32.load
       (get_local $1)
      )
      (get_local $9)
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$vijjj)
   (get_local $1)
   (get_local $3)
   (get_local $4)
   (get_local $5)
   (get_local $9)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 32)
   )
  )
  (i32.const 1)
 )
 (func $_ZN5eosio14execute_actionI4repoS1_JNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEyEEEbPT_MT0_FvDpT1_E (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $3
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 64)
    )
   )
  )
  (i32.store offset=44
   (tee_local $2
    (get_local $3)
   )
   (get_local $0)
  )
  (i32.store offset=32
   (get_local $2)
   (i32.load
    (get_local $1)
   )
  )
  (i32.store offset=36
   (get_local $2)
   (i32.load offset=4
    (get_local $1)
   )
  )
  (set_local $1
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (tee_local $0
      (call $action_data_size)
     )
    )
   )
   (block $label$1
    (block $label$2
     (br_if $label$2
      (i32.lt_u
       (get_local $0)
       (i32.const 513)
      )
     )
     (set_local $1
      (call $malloc
       (get_local $0)
      )
     )
     (br $label$1)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $1
      (i32.sub
       (get_local $3)
       (i32.and
        (i32.add
         (get_local $0)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $read_action_data
     (get_local $1)
     (get_local $0)
    )
   )
  )
  (i32.store offset=16
   (get_local $2)
   (i32.const 0)
  )
  (i64.store offset=8
   (get_local $2)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $2)
   (i64.const 0)
  )
  (i32.store offset=52
   (get_local $2)
   (get_local $1)
  )
  (i32.store offset=48
   (get_local $2)
   (get_local $1)
  )
  (i32.store offset=56
   (get_local $2)
   (i32.add
    (get_local $1)
    (get_local $0)
   )
  )
  (drop
   (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
    (i32.add
     (get_local $2)
     (i32.const 48)
    )
    (i32.add
     (get_local $2)
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=56
      (get_local $2)
     )
     (i32.load offset=52
      (get_local $2)
     )
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $2)
     (i32.const 24)
    )
    (i32.load offset=52
     (get_local $2)
    )
    (i32.const 8)
   )
  )
  (block $label$3
   (br_if $label$3
    (i32.lt_u
     (get_local $0)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $1)
   )
  )
  (i32.store offset=52
   (get_local $2)
   (i32.add
    (get_local $2)
    (i32.const 32)
   )
  )
  (i32.store offset=48
   (get_local $2)
   (i32.add
    (get_local $2)
    (i32.const 44)
   )
  )
  (call $_ZN5boost4mp116detail16tuple_apply_implIRZN5eosio14execute_actionI4repoS5_JNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEEyEEEbPT_MT0_FvDpT1_EEUlDpT_E_RNS6_5tupleIJSC_yEEEJLj0ELj1EEEEDTclclsr3stdE7forwardISD_Efp_Espclsr3stdE3getIXT1_EEclsr3stdE7forwardISF_Efp0_EEEEOSD_OSF_NS0_16integer_sequenceIjJXspT1_EEEE
   (i32.add
    (get_local $2)
    (i32.const 48)
   )
   (i32.add
    (get_local $2)
    (i32.const 8)
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (i32.and
      (i32.load8_u offset=8
       (get_local $2)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load
     (i32.add
      (get_local $2)
      (i32.const 16)
     )
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $2)
    (i32.const 64)
   )
  )
  (i32.const 1)
 )
 (func $_ZN5eosio14execute_actionI4repoS1_JyEEEbPT_MT0_FvDpT1_E (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (set_local $6
   (tee_local $4
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $4)
  )
  (set_local $2
   (i32.load offset=4
    (get_local $1)
   )
  )
  (set_local $5
   (i32.load
    (get_local $1)
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.eqz
        (tee_local $1
         (call $action_data_size)
        )
       )
      )
      (br_if $label$2
       (i32.lt_u
        (get_local $1)
        (i32.const 513)
       )
      )
      (set_local $4
       (call $malloc
        (get_local $1)
       )
      )
      (br $label$1)
     )
     (set_local $4
      (i32.const 0)
     )
     (br $label$0)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $4
      (i32.sub
       (get_local $4)
       (i32.and
        (i32.add
         (get_local $1)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $read_action_data
     (get_local $4)
     (get_local $1)
    )
   )
  )
  (i64.store offset=8
   (get_local $6)
   (i64.const 0)
  )
  (call $eosio_assert
   (i32.gt_u
    (get_local $1)
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
    (get_local $4)
    (i32.const 8)
   )
  )
  (set_local $3
   (i64.load offset=8
    (get_local $6)
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.lt_u
     (get_local $1)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $4)
   )
  )
  (set_local $1
   (i32.add
    (get_local $0)
    (i32.shr_s
     (get_local $2)
     (i32.const 1)
    )
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.eqz
     (i32.and
      (get_local $2)
      (i32.const 1)
     )
    )
   )
   (set_local $5
    (i32.load
     (i32.add
      (i32.load
       (get_local $1)
      )
      (get_local $5)
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$vij)
   (get_local $1)
   (get_local $3)
   (get_local $5)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 16)
   )
  )
  (i32.const 1)
 )
 (func $_ZN5eosio14execute_actionI4repoS1_JhEEEbPT_MT0_FvDpT1_E (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (set_local $5
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $6)
  )
  (set_local $2
   (i32.load offset=4
    (get_local $1)
   )
  )
  (set_local $4
   (i32.load
    (get_local $1)
   )
  )
  (set_local $3
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (tee_local $1
      (call $action_data_size)
     )
    )
   )
   (block $label$1
    (block $label$2
     (br_if $label$2
      (i32.lt_u
       (get_local $1)
       (i32.const 513)
      )
     )
     (set_local $3
      (call $malloc
       (get_local $1)
      )
     )
     (br $label$1)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $3
      (i32.sub
       (get_local $6)
       (i32.and
        (i32.add
         (get_local $1)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $read_action_data
     (get_local $3)
     (get_local $1)
    )
   )
  )
  (i32.store8 offset=8
   (get_local $5)
   (i32.const 0)
  )
  (call $eosio_assert
   (i32.ne
    (get_local $1)
    (i32.const 0)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $5)
     (i32.const 8)
    )
    (get_local $3)
    (i32.const 1)
   )
  )
  (set_local $6
   (i32.load8_u offset=8
    (get_local $5)
   )
  )
  (block $label$3
   (br_if $label$3
    (i32.lt_u
     (get_local $1)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $3)
   )
  )
  (set_local $1
   (i32.add
    (get_local $0)
    (i32.shr_s
     (get_local $2)
     (i32.const 1)
    )
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (i32.and
      (get_local $2)
      (i32.const 1)
     )
    )
   )
   (set_local $4
    (i32.load
     (i32.add
      (i32.load
       (get_local $1)
      )
      (get_local $4)
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$vii)
   (get_local $1)
   (i32.and
    (get_local $6)
    (i32.const 255)
   )
   (get_local $4)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $5)
    (i32.const 16)
   )
  )
  (i32.const 1)
 )
 (func $_ZN5boost4mp116detail16tuple_apply_implIRZN5eosio14execute_actionI4repoS5_JNSt3__112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEEyEEEbPT_MT0_FvDpT1_EEUlDpT_E_RNS6_5tupleIJSC_yEEEJLj0ELj1EEEEDTclclsr3stdE7forwardISD_Efp_Espclsr3stdE3getIXT1_EEclsr3stdE7forwardISF_Efp0_EEEEOSD_OSF_NS0_16integer_sequenceIjJXspT1_EEEE (param $0 i32) (param $1 i32)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $4
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 32)
    )
   )
  )
  (drop
   (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
    (get_local $4)
    (get_local $1)
   )
  )
  (set_local $2
   (i64.load offset=16
    (get_local $1)
   )
  )
  (set_local $1
   (i32.add
    (i32.load
     (i32.load
      (get_local $0)
     )
    )
    (i32.shr_s
     (tee_local $3
      (i32.load offset=4
       (tee_local $0
        (i32.load offset=4
         (get_local $0)
        )
       )
      )
     )
     (i32.const 1)
    )
   )
  )
  (set_local $0
   (i32.load
    (get_local $0)
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (i32.and
      (get_local $3)
      (i32.const 1)
     )
    )
   )
   (set_local $0
    (i32.load
     (i32.add
      (i32.load
       (get_local $1)
      )
      (get_local $0)
     )
    )
   )
  )
  (drop
   (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
    (i32.add
     (get_local $4)
     (i32.const 16)
    )
    (get_local $4)
   )
  )
  (call_indirect (type $FUNCSIG$viij)
   (get_local $1)
   (i32.add
    (get_local $4)
    (i32.const 16)
   )
   (get_local $2)
   (get_local $0)
  )
  (block $label$1
   (br_if $label$1
    (i32.eqz
     (i32.and
      (i32.load8_u offset=16
       (get_local $4)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load offset=24
     (get_local $4)
    )
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (i32.and
      (i32.load8_u
       (get_local $4)
      )
      (i32.const 1)
     )
    )
   )
   (call $_ZdlPv
    (i32.load offset=8
     (get_local $4)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $4)
    (i32.const 32)
   )
  )
 )
 (func $_ZN5boost6fusion6detail17for_each_unrolledILi8EE4callINS0_18std_tuple_iteratorINSt3__15tupleIJyyNS6_6vectorINS6_12basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEENSC_ISE_EEEENS8_IyNSC_IyEEEESI_SI_SI_yEEELi0EEEZN5eosiorsINSL_10datastreamIPKcEEJyySG_SI_SI_SI_SI_yEEERT_SS_RNS7_IJDpT0_EEEEUlSS_E_EEvRKSR_RKT0_ (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (set_local $2
   (i32.load
    (get_local $0)
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (tee_local $3
       (i32.load
        (get_local $1)
       )
      )
     )
     (i32.load offset=4
      (get_local $3)
     )
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (get_local $2)
    (i32.load offset=4
     (get_local $3)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $3)
   (i32.add
    (i32.load offset=4
     (get_local $3)
    )
    (i32.const 8)
   )
  )
  (set_local $3
   (i32.load
    (get_local $0)
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (tee_local $0
       (i32.load
        (get_local $1)
       )
      )
     )
     (i32.load offset=4
      (get_local $0)
     )
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $3)
     (i32.const 8)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (i32.add
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (drop
   (call $_ZN5eosiorsINS_10datastreamIPKcEENSt3__112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEEERT_SD_RNS5_6vectorIT0_NS9_ISF_EEEE
    (i32.load
     (get_local $1)
    )
    (i32.add
     (get_local $3)
     (i32.const 16)
    )
   )
  )
  (drop
   (call $_ZN5eosiorsINS_10datastreamIPKcEEyEERT_S6_RNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE
    (i32.load
     (get_local $1)
    )
    (i32.add
     (get_local $3)
     (i32.const 28)
    )
   )
  )
  (drop
   (call $_ZN5eosiorsINS_10datastreamIPKcEEyEERT_S6_RNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE
    (i32.load
     (get_local $1)
    )
    (i32.add
     (get_local $3)
     (i32.const 40)
    )
   )
  )
  (drop
   (call $_ZN5eosiorsINS_10datastreamIPKcEEyEERT_S6_RNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE
    (i32.load
     (get_local $1)
    )
    (i32.add
     (get_local $3)
     (i32.const 52)
    )
   )
  )
  (drop
   (call $_ZN5eosiorsINS_10datastreamIPKcEEyEERT_S6_RNSt3__16vectorIT0_NS7_9allocatorIS9_EEEE
    (i32.load
     (get_local $1)
    )
    (i32.add
     (get_local $3)
     (i32.const 64)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (tee_local $1
       (i32.load
        (get_local $1)
       )
      )
     )
     (i32.load offset=4
      (get_local $1)
     )
    )
    (i32.const 7)
   )
   (i32.const 288)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $3)
     (i32.const 80)
    )
    (i32.load offset=4
     (get_local $1)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $1)
   (i32.add
    (i32.load offset=4
     (get_local $1)
    )
    (i32.const 8)
   )
  )
 )
 (func $_ZN5boost4mp116detail16tuple_apply_implIRZN5eosio14execute_actionI4repoS5_JyyNSt3__16vectorINS6_12basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEENSB_ISD_EEEENS7_IyNSB_IyEEEESH_SH_SH_yEEEbPT_MT0_FvDpT1_EEUlDpT_E_RNS6_5tupleIJyySF_SH_SH_SH_SH_yEEEJLj0ELj1ELj2ELj3ELj4ELj5ELj6ELj7EEEEDTclclsr3stdE7forwardISI_Efp_Espclsr3stdE3getIXT1_EEclsr3stdE7forwardISK_Efp0_EEEEOSI_OSK_NS0_16integer_sequenceIjJXspT1_EEEE (param $0 i32) (param $1 i32)
  (local $2 i64)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 80)
    )
   )
  )
  (i64.store offset=64
   (get_local $7)
   (i64.const 0)
  )
  (i32.store offset=72
   (get_local $7)
   (i32.const 0)
  )
  (set_local $5
   (i32.div_s
    (tee_local $6
     (i32.sub
      (i32.load
       (i32.add
        (get_local $1)
        (i32.const 20)
       )
      )
      (i32.load offset=16
       (get_local $1)
      )
     )
    )
    (i32.const 12)
   )
  )
  (set_local $3
   (i64.load offset=8
    (get_local $1)
   )
  )
  (set_local $2
   (i64.load
    (get_local $1)
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (br_if $label$5
         (i32.eqz
          (get_local $6)
         )
        )
        (br_if $label$4
         (i32.ge_u
          (get_local $5)
          (i32.const 357913942)
         )
        )
        (i32.store
         (i32.add
          (get_local $7)
          (i32.const 72)
         )
         (i32.add
          (tee_local $6
           (call $_Znwj
            (get_local $6)
           )
          )
          (i32.mul
           (get_local $5)
           (i32.const 12)
          )
         )
        )
        (i32.store offset=64
         (get_local $7)
         (get_local $6)
        )
        (i32.store offset=68
         (get_local $7)
         (get_local $6)
        )
        (br_if $label$5
         (i32.eq
          (tee_local $5
           (i32.load
            (i32.add
             (get_local $1)
             (i32.const 16)
            )
           )
          )
          (tee_local $4
           (i32.load
            (i32.add
             (get_local $1)
             (i32.const 20)
            )
           )
          )
         )
        )
        (loop $label$6
         (drop
          (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
           (get_local $6)
           (get_local $5)
          )
         )
         (set_local $6
          (i32.add
           (get_local $6)
           (i32.const 12)
          )
         )
         (br_if $label$6
          (i32.ne
           (get_local $4)
           (tee_local $5
            (i32.add
             (get_local $5)
             (i32.const 12)
            )
           )
          )
         )
        )
        (i32.store offset=68
         (get_local $7)
         (get_local $6)
        )
       )
       (i32.store offset=56
        (get_local $7)
        (i32.const 0)
       )
       (i64.store offset=48
        (get_local $7)
        (i64.const 0)
       )
       (block $label$7
        (br_if $label$7
         (i32.eqz
          (tee_local $5
           (i32.shr_s
            (tee_local $6
             (i32.sub
              (i32.load
               (i32.add
                (get_local $1)
                (i32.const 32)
               )
              )
              (i32.load offset=28
               (get_local $1)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$3
         (i32.ge_u
          (get_local $5)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $7)
          (i32.const 56)
         )
         (i32.add
          (tee_local $6
           (call $_Znwj
            (get_local $6)
           )
          )
          (i32.shl
           (get_local $5)
           (i32.const 3)
          )
         )
        )
        (i32.store offset=48
         (get_local $7)
         (get_local $6)
        )
        (i32.store offset=52
         (get_local $7)
         (get_local $6)
        )
        (br_if $label$7
         (i32.lt_s
          (tee_local $5
           (i32.sub
            (i32.load
             (i32.add
              (get_local $1)
              (i32.const 32)
             )
            )
            (tee_local $4
             (i32.load
              (i32.add
               (get_local $1)
               (i32.const 28)
              )
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $6)
          (get_local $4)
          (get_local $5)
         )
        )
        (i32.store offset=52
         (get_local $7)
         (i32.add
          (get_local $6)
          (get_local $5)
         )
        )
       )
       (i32.store offset=40
        (get_local $7)
        (i32.const 0)
       )
       (i64.store offset=32
        (get_local $7)
        (i64.const 0)
       )
       (block $label$8
        (br_if $label$8
         (i32.eqz
          (tee_local $5
           (i32.shr_s
            (tee_local $6
             (i32.sub
              (i32.load
               (i32.add
                (get_local $1)
                (i32.const 44)
               )
              )
              (i32.load offset=40
               (get_local $1)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$2
         (i32.ge_u
          (get_local $5)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $7)
          (i32.const 40)
         )
         (i32.add
          (tee_local $6
           (call $_Znwj
            (get_local $6)
           )
          )
          (i32.shl
           (get_local $5)
           (i32.const 3)
          )
         )
        )
        (i32.store offset=32
         (get_local $7)
         (get_local $6)
        )
        (i32.store offset=36
         (get_local $7)
         (get_local $6)
        )
        (br_if $label$8
         (i32.lt_s
          (tee_local $5
           (i32.sub
            (i32.load
             (i32.add
              (get_local $1)
              (i32.const 44)
             )
            )
            (tee_local $4
             (i32.load
              (i32.add
               (get_local $1)
               (i32.const 40)
              )
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $6)
          (get_local $4)
          (get_local $5)
         )
        )
        (i32.store offset=36
         (get_local $7)
         (i32.add
          (get_local $6)
          (get_local $5)
         )
        )
       )
       (i32.store offset=24
        (get_local $7)
        (i32.const 0)
       )
       (i64.store offset=16
        (get_local $7)
        (i64.const 0)
       )
       (block $label$9
        (br_if $label$9
         (i32.eqz
          (tee_local $5
           (i32.shr_s
            (tee_local $6
             (i32.sub
              (i32.load
               (i32.add
                (get_local $1)
                (i32.const 56)
               )
              )
              (i32.load offset=52
               (get_local $1)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$1
         (i32.ge_u
          (get_local $5)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $7)
          (i32.const 24)
         )
         (i32.add
          (tee_local $6
           (call $_Znwj
            (get_local $6)
           )
          )
          (i32.shl
           (get_local $5)
           (i32.const 3)
          )
         )
        )
        (i32.store offset=16
         (get_local $7)
         (get_local $6)
        )
        (i32.store offset=20
         (get_local $7)
         (get_local $6)
        )
        (br_if $label$9
         (i32.lt_s
          (tee_local $5
           (i32.sub
            (i32.load
             (i32.add
              (get_local $1)
              (i32.const 56)
             )
            )
            (tee_local $4
             (i32.load
              (i32.add
               (get_local $1)
               (i32.const 52)
              )
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $6)
          (get_local $4)
          (get_local $5)
         )
        )
        (i32.store offset=20
         (get_local $7)
         (i32.add
          (get_local $6)
          (get_local $5)
         )
        )
       )
       (i32.store offset=8
        (get_local $7)
        (i32.const 0)
       )
       (i64.store
        (get_local $7)
        (i64.const 0)
       )
       (block $label$10
        (br_if $label$10
         (i32.eqz
          (tee_local $5
           (i32.shr_s
            (tee_local $6
             (i32.sub
              (i32.load
               (i32.add
                (get_local $1)
                (i32.const 68)
               )
              )
              (i32.load offset=64
               (get_local $1)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$0
         (i32.ge_u
          (get_local $5)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $7)
          (i32.const 8)
         )
         (i32.add
          (tee_local $6
           (call $_Znwj
            (get_local $6)
           )
          )
          (i32.shl
           (get_local $5)
           (i32.const 3)
          )
         )
        )
        (i32.store
         (get_local $7)
         (get_local $6)
        )
        (i32.store offset=4
         (get_local $7)
         (get_local $6)
        )
        (br_if $label$10
         (i32.lt_s
          (tee_local $5
           (i32.sub
            (i32.load
             (i32.add
              (get_local $1)
              (i32.const 68)
             )
            )
            (tee_local $4
             (i32.load
              (i32.add
               (get_local $1)
               (i32.const 64)
              )
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $6)
          (get_local $4)
          (get_local $5)
         )
        )
        (i32.store offset=4
         (get_local $7)
         (i32.add
          (get_local $6)
          (get_local $5)
         )
        )
       )
       (call $_ZZN5eosio14execute_actionI4repoS1_JyyNSt3__16vectorINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEENS7_IS9_EEEENS3_IyNS7_IyEEEESD_SD_SD_yEEEbPT_MT0_FvDpT1_EENKUlDpT_E_clIJyySB_SD_SD_SD_SD_yEEEDaSM_
        (get_local $0)
        (get_local $2)
        (get_local $3)
        (i32.add
         (get_local $7)
         (i32.const 64)
        )
        (i32.add
         (get_local $7)
         (i32.const 48)
        )
        (i32.add
         (get_local $7)
         (i32.const 32)
        )
        (i32.add
         (get_local $7)
         (i32.const 16)
        )
        (get_local $7)
        (i64.load offset=80
         (get_local $1)
        )
       )
       (block $label$11
        (br_if $label$11
         (i32.eqz
          (tee_local $6
           (i32.load
            (get_local $7)
           )
          )
         )
        )
        (i32.store offset=4
         (get_local $7)
         (get_local $6)
        )
        (call $_ZdlPv
         (get_local $6)
        )
       )
       (block $label$12
        (br_if $label$12
         (i32.eqz
          (tee_local $6
           (i32.load offset=16
            (get_local $7)
           )
          )
         )
        )
        (i32.store offset=20
         (get_local $7)
         (get_local $6)
        )
        (call $_ZdlPv
         (get_local $6)
        )
       )
       (block $label$13
        (br_if $label$13
         (i32.eqz
          (tee_local $6
           (i32.load offset=32
            (get_local $7)
           )
          )
         )
        )
        (i32.store offset=36
         (get_local $7)
         (get_local $6)
        )
        (call $_ZdlPv
         (get_local $6)
        )
       )
       (block $label$14
        (br_if $label$14
         (i32.eqz
          (tee_local $6
           (i32.load offset=48
            (get_local $7)
           )
          )
         )
        )
        (i32.store offset=52
         (get_local $7)
         (get_local $6)
        )
        (call $_ZdlPv
         (get_local $6)
        )
       )
       (block $label$15
        (br_if $label$15
         (i32.eqz
          (tee_local $1
           (i32.load offset=64
            (get_local $7)
           )
          )
         )
        )
        (block $label$16
         (block $label$17
          (br_if $label$17
           (i32.eq
            (tee_local $6
             (i32.load offset=68
              (get_local $7)
             )
            )
            (get_local $1)
           )
          )
          (set_local $5
           (i32.sub
            (i32.const 0)
            (get_local $1)
           )
          )
          (set_local $6
           (i32.add
            (get_local $6)
            (i32.const -12)
           )
          )
          (loop $label$18
           (block $label$19
            (br_if $label$19
             (i32.eqz
              (i32.and
               (i32.load8_u
                (get_local $6)
               )
               (i32.const 1)
              )
             )
            )
            (call $_ZdlPv
             (i32.load
              (i32.add
               (get_local $6)
               (i32.const 8)
              )
             )
            )
           )
           (br_if $label$18
            (i32.ne
             (i32.add
              (tee_local $6
               (i32.add
                (get_local $6)
                (i32.const -12)
               )
              )
              (get_local $5)
             )
             (i32.const -12)
            )
           )
          )
          (set_local $6
           (i32.load offset=64
            (get_local $7)
           )
          )
          (br $label$16)
         )
         (set_local $6
          (get_local $1)
         )
        )
        (i32.store offset=68
         (get_local $7)
         (get_local $1)
        )
        (call $_ZdlPv
         (get_local $6)
        )
       )
       (i32.store offset=4
        (i32.const 0)
        (i32.add
         (get_local $7)
         (i32.const 80)
        )
       )
       (return)
      )
      (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
       (i32.add
        (get_local $7)
        (i32.const 64)
       )
      )
      (unreachable)
     )
     (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
      (i32.add
       (get_local $7)
       (i32.const 48)
      )
     )
     (unreachable)
    )
    (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
     (i32.add
      (get_local $7)
      (i32.const 32)
     )
    )
    (unreachable)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (i32.add
     (get_local $7)
     (i32.const 16)
    )
   )
   (unreachable)
  )
  (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
   (get_local $7)
  )
  (unreachable)
 )
 (func $_ZZN5eosio14execute_actionI4repoS1_JyyNSt3__16vectorINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEENS7_IS9_EEEENS3_IyNS7_IyEEEESD_SD_SD_yEEEbPT_MT0_FvDpT1_EENKUlDpT_E_clIJyySB_SD_SD_SD_SD_yEEEDaSM_ (param $0 i32) (param $1 i64) (param $2 i64) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32) (param $7 i32) (param $8 i64)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $12
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 80)
    )
   )
  )
  (set_local $9
   (i32.add
    (i32.load
     (i32.load
      (get_local $0)
     )
    )
    (i32.shr_s
     (tee_local $11
      (i32.load offset=4
       (tee_local $0
        (i32.load offset=4
         (get_local $0)
        )
       )
      )
     )
     (i32.const 1)
    )
   )
  )
  (set_local $10
   (i32.load
    (get_local $0)
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (i32.and
      (get_local $11)
      (i32.const 1)
     )
    )
   )
   (set_local $10
    (i32.load
     (i32.add
      (i32.load
       (get_local $9)
      )
      (get_local $10)
     )
    )
   )
  )
  (i32.store offset=72
   (get_local $12)
   (i32.const 0)
  )
  (i64.store offset=64
   (get_local $12)
   (i64.const 0)
  )
  (set_local $11
   (i32.div_s
    (tee_local $0
     (i32.sub
      (i32.load offset=4
       (get_local $3)
      )
      (i32.load
       (get_local $3)
      )
     )
    )
    (i32.const 12)
   )
  )
  (block $label$1
   (block $label$2
    (block $label$3
     (block $label$4
      (block $label$5
       (block $label$6
        (br_if $label$6
         (i32.eqz
          (get_local $0)
         )
        )
        (br_if $label$5
         (i32.ge_u
          (get_local $11)
          (i32.const 357913942)
         )
        )
        (i32.store
         (i32.add
          (get_local $12)
          (i32.const 72)
         )
         (i32.add
          (tee_local $0
           (call $_Znwj
            (get_local $0)
           )
          )
          (i32.mul
           (get_local $11)
           (i32.const 12)
          )
         )
        )
        (i32.store offset=64
         (get_local $12)
         (get_local $0)
        )
        (i32.store offset=68
         (get_local $12)
         (get_local $0)
        )
        (br_if $label$6
         (i32.eq
          (tee_local $11
           (i32.load
            (get_local $3)
           )
          )
          (tee_local $3
           (i32.load
            (i32.add
             (get_local $3)
             (i32.const 4)
            )
           )
          )
         )
        )
        (loop $label$7
         (drop
          (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
           (get_local $0)
           (get_local $11)
          )
         )
         (set_local $0
          (i32.add
           (get_local $0)
           (i32.const 12)
          )
         )
         (br_if $label$7
          (i32.ne
           (get_local $3)
           (tee_local $11
            (i32.add
             (get_local $11)
             (i32.const 12)
            )
           )
          )
         )
        )
        (i32.store offset=68
         (get_local $12)
         (get_local $0)
        )
       )
       (i32.store offset=56
        (get_local $12)
        (i32.const 0)
       )
       (i64.store offset=48
        (get_local $12)
        (i64.const 0)
       )
       (block $label$8
        (br_if $label$8
         (i32.eqz
          (tee_local $11
           (i32.shr_s
            (tee_local $0
             (i32.sub
              (i32.load offset=4
               (get_local $4)
              )
              (i32.load
               (get_local $4)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$4
         (i32.ge_u
          (get_local $11)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $12)
          (i32.const 56)
         )
         (i32.add
          (tee_local $0
           (call $_Znwj
            (get_local $0)
           )
          )
          (i32.shl
           (get_local $11)
           (i32.const 3)
          )
         )
        )
        (i32.store offset=48
         (get_local $12)
         (get_local $0)
        )
        (i32.store offset=52
         (get_local $12)
         (get_local $0)
        )
        (br_if $label$8
         (i32.lt_s
          (tee_local $11
           (i32.sub
            (i32.load
             (i32.add
              (get_local $4)
              (i32.const 4)
             )
            )
            (tee_local $3
             (i32.load
              (get_local $4)
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $0)
          (get_local $3)
          (get_local $11)
         )
        )
        (i32.store offset=52
         (get_local $12)
         (i32.add
          (get_local $0)
          (get_local $11)
         )
        )
       )
       (i32.store offset=40
        (get_local $12)
        (i32.const 0)
       )
       (i64.store offset=32
        (get_local $12)
        (i64.const 0)
       )
       (block $label$9
        (br_if $label$9
         (i32.eqz
          (tee_local $11
           (i32.shr_s
            (tee_local $0
             (i32.sub
              (i32.load offset=4
               (get_local $5)
              )
              (i32.load
               (get_local $5)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$3
         (i32.ge_u
          (get_local $11)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $12)
          (i32.const 40)
         )
         (i32.add
          (tee_local $0
           (call $_Znwj
            (get_local $0)
           )
          )
          (i32.shl
           (get_local $11)
           (i32.const 3)
          )
         )
        )
        (i32.store offset=32
         (get_local $12)
         (get_local $0)
        )
        (i32.store offset=36
         (get_local $12)
         (get_local $0)
        )
        (br_if $label$9
         (i32.lt_s
          (tee_local $11
           (i32.sub
            (i32.load
             (i32.add
              (get_local $5)
              (i32.const 4)
             )
            )
            (tee_local $3
             (i32.load
              (get_local $5)
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $0)
          (get_local $3)
          (get_local $11)
         )
        )
        (i32.store offset=36
         (get_local $12)
         (i32.add
          (get_local $0)
          (get_local $11)
         )
        )
       )
       (i32.store offset=24
        (get_local $12)
        (i32.const 0)
       )
       (i64.store offset=16
        (get_local $12)
        (i64.const 0)
       )
       (block $label$10
        (br_if $label$10
         (i32.eqz
          (tee_local $11
           (i32.shr_s
            (tee_local $0
             (i32.sub
              (i32.load offset=4
               (get_local $6)
              )
              (i32.load
               (get_local $6)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$2
         (i32.ge_u
          (get_local $11)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $12)
          (i32.const 24)
         )
         (i32.add
          (tee_local $0
           (call $_Znwj
            (get_local $0)
           )
          )
          (i32.shl
           (get_local $11)
           (i32.const 3)
          )
         )
        )
        (i32.store offset=16
         (get_local $12)
         (get_local $0)
        )
        (i32.store offset=20
         (get_local $12)
         (get_local $0)
        )
        (br_if $label$10
         (i32.lt_s
          (tee_local $11
           (i32.sub
            (i32.load
             (i32.add
              (get_local $6)
              (i32.const 4)
             )
            )
            (tee_local $3
             (i32.load
              (get_local $6)
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $0)
          (get_local $3)
          (get_local $11)
         )
        )
        (i32.store offset=20
         (get_local $12)
         (i32.add
          (get_local $0)
          (get_local $11)
         )
        )
       )
       (i32.store offset=8
        (get_local $12)
        (i32.const 0)
       )
       (i64.store
        (get_local $12)
        (i64.const 0)
       )
       (block $label$11
        (br_if $label$11
         (i32.eqz
          (tee_local $11
           (i32.shr_s
            (tee_local $0
             (i32.sub
              (i32.load offset=4
               (get_local $7)
              )
              (i32.load
               (get_local $7)
              )
             )
            )
            (i32.const 3)
           )
          )
         )
        )
        (br_if $label$1
         (i32.ge_u
          (get_local $11)
          (i32.const 536870912)
         )
        )
        (i32.store
         (i32.add
          (get_local $12)
          (i32.const 8)
         )
         (i32.add
          (tee_local $0
           (call $_Znwj
            (get_local $0)
           )
          )
          (i32.shl
           (get_local $11)
           (i32.const 3)
          )
         )
        )
        (i32.store
         (get_local $12)
         (get_local $0)
        )
        (i32.store offset=4
         (get_local $12)
         (get_local $0)
        )
        (br_if $label$11
         (i32.lt_s
          (tee_local $11
           (i32.sub
            (i32.load
             (i32.add
              (get_local $7)
              (i32.const 4)
             )
            )
            (tee_local $3
             (i32.load
              (get_local $7)
             )
            )
           )
          )
          (i32.const 1)
         )
        )
        (drop
         (call $memcpy
          (get_local $0)
          (get_local $3)
          (get_local $11)
         )
        )
        (i32.store offset=4
         (get_local $12)
         (i32.add
          (get_local $0)
          (get_local $11)
         )
        )
       )
       (call_indirect (type $FUNCSIG$vijjiiiiij)
        (get_local $9)
        (get_local $1)
        (get_local $2)
        (i32.add
         (get_local $12)
         (i32.const 64)
        )
        (i32.add
         (get_local $12)
         (i32.const 48)
        )
        (i32.add
         (get_local $12)
         (i32.const 32)
        )
        (i32.add
         (get_local $12)
         (i32.const 16)
        )
        (get_local $12)
        (get_local $8)
        (get_local $10)
       )
       (block $label$12
        (br_if $label$12
         (i32.eqz
          (tee_local $0
           (i32.load
            (get_local $12)
           )
          )
         )
        )
        (i32.store offset=4
         (get_local $12)
         (get_local $0)
        )
        (call $_ZdlPv
         (get_local $0)
        )
       )
       (block $label$13
        (br_if $label$13
         (i32.eqz
          (tee_local $0
           (i32.load offset=16
            (get_local $12)
           )
          )
         )
        )
        (i32.store offset=20
         (get_local $12)
         (get_local $0)
        )
        (call $_ZdlPv
         (get_local $0)
        )
       )
       (block $label$14
        (br_if $label$14
         (i32.eqz
          (tee_local $0
           (i32.load offset=32
            (get_local $12)
           )
          )
         )
        )
        (i32.store offset=36
         (get_local $12)
         (get_local $0)
        )
        (call $_ZdlPv
         (get_local $0)
        )
       )
       (block $label$15
        (br_if $label$15
         (i32.eqz
          (tee_local $0
           (i32.load offset=48
            (get_local $12)
           )
          )
         )
        )
        (i32.store offset=52
         (get_local $12)
         (get_local $0)
        )
        (call $_ZdlPv
         (get_local $0)
        )
       )
       (block $label$16
        (br_if $label$16
         (i32.eqz
          (tee_local $3
           (i32.load offset=64
            (get_local $12)
           )
          )
         )
        )
        (block $label$17
         (block $label$18
          (br_if $label$18
           (i32.eq
            (tee_local $0
             (i32.load offset=68
              (get_local $12)
             )
            )
            (get_local $3)
           )
          )
          (set_local $11
           (i32.sub
            (i32.const 0)
            (get_local $3)
           )
          )
          (set_local $0
           (i32.add
            (get_local $0)
            (i32.const -12)
           )
          )
          (loop $label$19
           (block $label$20
            (br_if $label$20
             (i32.eqz
              (i32.and
               (i32.load8_u
                (get_local $0)
               )
               (i32.const 1)
              )
             )
            )
            (call $_ZdlPv
             (i32.load
              (i32.add
               (get_local $0)
               (i32.const 8)
              )
             )
            )
           )
           (br_if $label$19
            (i32.ne
             (i32.add
              (tee_local $0
               (i32.add
                (get_local $0)
                (i32.const -12)
               )
              )
              (get_local $11)
             )
             (i32.const -12)
            )
           )
          )
          (set_local $0
           (i32.load offset=64
            (get_local $12)
           )
          )
          (br $label$17)
         )
         (set_local $0
          (get_local $3)
         )
        )
        (i32.store offset=68
         (get_local $12)
         (get_local $3)
        )
        (call $_ZdlPv
         (get_local $0)
        )
       )
       (i32.store offset=4
        (i32.const 0)
        (i32.add
         (get_local $12)
         (i32.const 80)
        )
       )
       (return)
      )
      (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
       (i32.add
        (get_local $12)
        (i32.const 64)
       )
      )
      (unreachable)
     )
     (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
      (i32.add
       (get_local $12)
       (i32.const 48)
      )
     )
     (unreachable)
    )
    (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
     (i32.add
      (get_local $12)
      (i32.const 32)
     )
    )
    (unreachable)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (i32.add
     (get_local $12)
     (i32.const 16)
    )
   )
   (unreachable)
  )
  (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
   (get_local $12)
  )
  (unreachable)
 )
 (func $_ZN5eosiorsINS_10datastreamIPKcEENSt3__112basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEEERT_SD_RNS5_6vectorIT0_NS9_ISF_EEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (set_local $5
   (i32.load offset=4
    (get_local $0)
   )
  )
  (set_local $7
   (i32.const 0)
  )
  (set_local $6
   (i64.const 0)
  )
  (set_local $2
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
  )
  (set_local $3
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
  )
  (loop $label$0
   (call $eosio_assert
    (i32.lt_u
     (get_local $5)
     (i32.load
      (get_local $2)
     )
    )
    (i32.const 656)
   )
   (set_local $4
    (i32.load8_u
     (tee_local $5
      (i32.load
       (get_local $3)
      )
     )
    )
   )
   (i32.store
    (get_local $3)
    (tee_local $5
     (i32.add
      (get_local $5)
      (i32.const 1)
     )
    )
   )
   (set_local $6
    (i64.or
     (i64.extend_u/i32
      (i32.shl
       (i32.and
        (get_local $4)
        (i32.const 127)
       )
       (tee_local $7
        (i32.and
         (get_local $7)
         (i32.const 255)
        )
       )
      )
     )
     (get_local $6)
    )
   )
   (set_local $7
    (i32.add
     (get_local $7)
     (i32.const 7)
    )
   )
   (br_if $label$0
    (i32.shr_u
     (get_local $4)
     (i32.const 7)
    )
   )
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.le_u
      (tee_local $4
       (i32.wrap/i64
        (get_local $6)
       )
      )
      (tee_local $7
       (i32.div_s
        (i32.sub
         (tee_local $5
          (i32.load offset=4
           (get_local $1)
          )
         )
         (tee_local $3
          (i32.load
           (get_local $1)
          )
         )
        )
        (i32.const 12)
       )
      )
     )
    )
    (call $_ZNSt3__16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE8__appendEj
     (get_local $1)
     (i32.sub
      (get_local $4)
      (get_local $7)
     )
    )
    (set_local $5
     (i32.load
      (i32.add
       (get_local $1)
       (i32.const 4)
      )
     )
    )
    (br $label$1)
   )
   (br_if $label$1
    (i32.ge_u
     (get_local $4)
     (get_local $7)
    )
   )
   (block $label$3
    (br_if $label$3
     (i32.eq
      (get_local $5)
      (tee_local $2
       (i32.add
        (get_local $3)
        (tee_local $4
         (i32.mul
          (get_local $4)
          (i32.const 12)
         )
        )
       )
      )
     )
    )
    (set_local $7
     (i32.sub
      (i32.sub
       (i32.const 0)
       (get_local $3)
      )
      (get_local $4)
     )
    )
    (set_local $4
     (i32.add
      (get_local $5)
      (i32.const -12)
     )
    )
    (loop $label$4
     (block $label$5
      (br_if $label$5
       (i32.eqz
        (i32.and
         (i32.load8_u
          (get_local $4)
         )
         (i32.const 1)
        )
       )
      )
      (call $_ZdlPv
       (i32.load
        (i32.add
         (get_local $4)
         (i32.const 8)
        )
       )
      )
     )
     (br_if $label$4
      (i32.ne
       (i32.add
        (tee_local $4
         (i32.add
          (get_local $4)
          (i32.const -12)
         )
        )
        (get_local $7)
       )
       (i32.const -12)
      )
     )
    )
   )
   (i32.store
    (i32.add
     (get_local $1)
     (i32.const 4)
    )
    (get_local $2)
   )
   (set_local $5
    (get_local $2)
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eq
     (tee_local $4
      (i32.load
       (get_local $1)
      )
     )
     (get_local $5)
    )
   )
   (loop $label$7
    (drop
     (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
      (get_local $0)
      (get_local $4)
     )
    )
    (br_if $label$7
     (i32.ne
      (get_local $5)
      (tee_local $4
       (i32.add
        (get_local $4)
        (i32.const 12)
       )
      )
     )
    )
   )
  )
  (get_local $0)
 )
 (func $_ZNSt3__16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE8__appendEj (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.ge_u
        (i32.div_s
         (i32.sub
          (tee_local $6
           (i32.load offset=8
            (get_local $0)
           )
          )
          (tee_local $5
           (i32.load offset=4
            (get_local $0)
           )
          )
         )
         (i32.const 12)
        )
        (get_local $1)
       )
      )
      (br_if $label$1
       (i32.ge_u
        (tee_local $3
         (i32.add
          (tee_local $5
           (i32.div_s
            (i32.sub
             (get_local $5)
             (tee_local $2
              (i32.load
               (get_local $0)
              )
             )
            )
            (i32.const 12)
           )
          )
          (get_local $1)
         )
        )
        (i32.const 357913942)
       )
      )
      (set_local $4
       (i32.const 357913941)
      )
      (block $label$4
       (br_if $label$4
        (i32.gt_u
         (tee_local $6
          (i32.div_s
           (i32.sub
            (get_local $6)
            (get_local $2)
           )
           (i32.const 12)
          )
         )
         (i32.const 178956969)
        )
       )
       (br_if $label$2
        (i32.eqz
         (tee_local $4
          (select
           (get_local $3)
           (tee_local $4
            (i32.shl
             (get_local $6)
             (i32.const 1)
            )
           )
           (i32.lt_u
            (get_local $4)
            (get_local $3)
           )
          )
         )
        )
       )
      )
      (set_local $6
       (call $_Znwj
        (i32.mul
         (get_local $4)
         (i32.const 12)
        )
       )
      )
      (br $label$0)
     )
     (set_local $4
      (get_local $5)
     )
     (set_local $6
      (get_local $1)
     )
     (loop $label$5
      (i64.store align=4
       (get_local $4)
       (i64.const 0)
      )
      (i32.store
       (i32.add
        (get_local $4)
        (i32.const 8)
       )
       (i32.const 0)
      )
      (set_local $4
       (i32.add
        (get_local $4)
        (i32.const 12)
       )
      )
      (br_if $label$5
       (tee_local $6
        (i32.add
         (get_local $6)
         (i32.const -1)
        )
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
      (i32.add
       (get_local $5)
       (i32.mul
        (get_local $1)
        (i32.const 12)
       )
      )
     )
     (return)
    )
    (set_local $4
     (i32.const 0)
    )
    (set_local $6
     (i32.const 0)
    )
    (br $label$0)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (get_local $0)
   )
   (unreachable)
  )
  (set_local $2
   (i32.add
    (get_local $6)
    (i32.mul
     (get_local $4)
     (i32.const 12)
    )
   )
  )
  (set_local $4
   (tee_local $6
    (i32.add
     (get_local $6)
     (i32.mul
      (get_local $5)
      (i32.const 12)
     )
    )
   )
  )
  (set_local $5
   (get_local $1)
  )
  (loop $label$6
   (i64.store align=4
    (get_local $4)
    (i64.const 0)
   )
   (i32.store
    (i32.add
     (get_local $4)
     (i32.const 8)
    )
    (i32.const 0)
   )
   (set_local $4
    (i32.add
     (get_local $4)
     (i32.const 12)
    )
   )
   (br_if $label$6
    (tee_local $5
     (i32.add
      (get_local $5)
      (i32.const -1)
     )
    )
   )
  )
  (set_local $3
   (i32.add
    (get_local $6)
    (i32.mul
     (get_local $1)
     (i32.const 12)
    )
   )
  )
  (block $label$7
   (block $label$8
    (br_if $label$8
     (i32.eq
      (tee_local $5
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
      )
      (tee_local $4
       (i32.load
        (get_local $0)
       )
      )
     )
    )
    (set_local $1
     (i32.sub
      (i32.const 0)
      (get_local $4)
     )
    )
    (set_local $4
     (i32.add
      (get_local $5)
      (i32.const -12)
     )
    )
    (loop $label$9
     (i64.store align=4
      (i32.add
       (get_local $6)
       (i32.const -12)
      )
      (i64.load align=4
       (get_local $4)
      )
     )
     (i32.store
      (i32.add
       (get_local $6)
       (i32.const -4)
      )
      (i32.load
       (tee_local $5
        (i32.add
         (get_local $4)
         (i32.const 8)
        )
       )
      )
     )
     (i32.store
      (get_local $4)
      (i32.const 0)
     )
     (i32.store
      (i32.add
       (get_local $4)
       (i32.const 4)
      )
      (i32.const 0)
     )
     (i32.store
      (get_local $5)
      (i32.const 0)
     )
     (set_local $6
      (i32.add
       (get_local $6)
       (i32.const -12)
      )
     )
     (br_if $label$9
      (i32.ne
       (i32.add
        (tee_local $4
         (i32.add
          (get_local $4)
          (i32.const -12)
         )
        )
        (get_local $1)
       )
       (i32.const -12)
      )
     )
    )
    (set_local $4
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $5
     (i32.load
      (get_local $0)
     )
    )
    (br $label$7)
   )
   (set_local $5
    (get_local $4)
   )
  )
  (i32.store
   (get_local $0)
   (get_local $6)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (get_local $3)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (get_local $2)
  )
  (block $label$10
   (br_if $label$10
    (i32.eq
     (get_local $4)
     (get_local $5)
    )
   )
   (set_local $6
    (i32.sub
     (i32.const 0)
     (get_local $5)
    )
   )
   (set_local $4
    (i32.add
     (get_local $4)
     (i32.const -12)
    )
   )
   (loop $label$11
    (block $label$12
     (br_if $label$12
      (i32.eqz
       (i32.and
        (i32.load8_u
         (get_local $4)
        )
        (i32.const 1)
       )
      )
     )
     (call $_ZdlPv
      (i32.load
       (i32.add
        (get_local $4)
        (i32.const 8)
       )
      )
     )
    )
    (br_if $label$11
     (i32.ne
      (i32.add
       (tee_local $4
        (i32.add
         (get_local $4)
         (i32.const -12)
        )
       )
       (get_local $6)
      )
      (i32.const -12)
     )
    )
   )
  )
  (block $label$13
   (br_if $label$13
    (i32.eqz
     (get_local $5)
    )
   )
   (call $_ZdlPv
    (get_local $5)
   )
  )
 )
 (func $malloc (param $0 i32) (result i32)
  (call $_ZN5eosio14memory_manager6mallocEm
   (i32.const 1920)
   (get_local $0)
  )
 )
 (func $_ZN5eosio14memory_manager6mallocEm (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (get_local $1)
    )
   )
   (block $label$1
    (br_if $label$1
     (tee_local $13
      (i32.load offset=8384
       (get_local $0)
      )
     )
    )
    (set_local $13
     (i32.const 16)
    )
    (i32.store
     (i32.add
      (get_local $0)
      (i32.const 8384)
     )
     (i32.const 16)
    )
   )
   (set_local $2
    (select
     (i32.sub
      (i32.add
       (get_local $1)
       (i32.const 8)
      )
      (tee_local $2
       (i32.and
        (i32.add
         (get_local $1)
         (i32.const 4)
        )
        (i32.const 7)
       )
      )
     )
     (get_local $1)
     (get_local $2)
    )
   )
   (block $label$2
    (block $label$3
     (block $label$4
      (br_if $label$4
       (i32.ge_u
        (tee_local $10
         (i32.load offset=8388
          (get_local $0)
         )
        )
        (get_local $13)
       )
      )
      (set_local $1
       (i32.add
        (i32.add
         (get_local $0)
         (i32.mul
          (get_local $10)
          (i32.const 12)
         )
        )
        (i32.const 8192)
       )
      )
      (block $label$5
       (br_if $label$5
        (get_local $10)
       )
       (br_if $label$5
        (i32.load
         (tee_local $13
          (i32.add
           (get_local $0)
           (i32.const 8196)
          )
         )
        )
       )
       (i32.store
        (get_local $1)
        (i32.const 8192)
       )
       (i32.store
        (get_local $13)
        (get_local $0)
       )
      )
      (set_local $10
       (i32.add
        (get_local $2)
        (i32.const 4)
       )
      )
      (loop $label$6
       (block $label$7
        (br_if $label$7
         (i32.gt_u
          (i32.add
           (tee_local $13
            (i32.load offset=8
             (get_local $1)
            )
           )
           (get_local $10)
          )
          (i32.load
           (get_local $1)
          )
         )
        )
        (i32.store
         (tee_local $13
          (i32.add
           (i32.load offset=4
            (get_local $1)
           )
           (get_local $13)
          )
         )
         (i32.or
          (i32.and
           (i32.load
            (get_local $13)
           )
           (i32.const -2147483648)
          )
          (get_local $2)
         )
        )
        (i32.store
         (tee_local $1
          (i32.add
           (get_local $1)
           (i32.const 8)
          )
         )
         (i32.add
          (i32.load
           (get_local $1)
          )
          (get_local $10)
         )
        )
        (i32.store
         (get_local $13)
         (i32.or
          (i32.load
           (get_local $13)
          )
          (i32.const -2147483648)
         )
        )
        (br_if $label$3
         (tee_local $1
          (i32.add
           (get_local $13)
           (i32.const 4)
          )
         )
        )
       )
       (br_if $label$6
        (tee_local $1
         (call $_ZN5eosio14memory_manager16next_active_heapEv
          (get_local $0)
         )
        )
       )
      )
     )
     (set_local $4
      (i32.sub
       (i32.const 2147483644)
       (get_local $2)
      )
     )
     (set_local $11
      (i32.add
       (get_local $0)
       (i32.const 8392)
      )
     )
     (set_local $12
      (i32.add
       (get_local $0)
       (i32.const 8384)
      )
     )
     (set_local $13
      (tee_local $3
       (i32.load offset=8392
        (get_local $0)
       )
      )
     )
     (loop $label$8
      (call $eosio_assert
       (i32.eq
        (i32.load
         (i32.add
          (tee_local $1
           (i32.add
            (get_local $0)
            (i32.mul
             (get_local $13)
             (i32.const 12)
            )
           )
          )
          (i32.const 8200)
         )
        )
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $1)
           (i32.const 8192)
          )
         )
        )
       )
       (i32.const 10320)
      )
      (set_local $13
       (i32.add
        (tee_local $6
         (i32.load
          (i32.add
           (get_local $1)
           (i32.const 8196)
          )
         )
        )
        (i32.const 4)
       )
      )
      (loop $label$9
       (set_local $7
        (i32.add
         (get_local $6)
         (i32.load
          (get_local $5)
         )
        )
       )
       (set_local $1
        (i32.and
         (tee_local $9
          (i32.load
           (tee_local $8
            (i32.add
             (get_local $13)
             (i32.const -4)
            )
           )
          )
         )
         (i32.const 2147483647)
        )
       )
       (block $label$10
        (br_if $label$10
         (i32.lt_s
          (get_local $9)
          (i32.const 0)
         )
        )
        (block $label$11
         (br_if $label$11
          (i32.ge_u
           (get_local $1)
           (get_local $2)
          )
         )
         (loop $label$12
          (br_if $label$11
           (i32.ge_u
            (tee_local $10
             (i32.add
              (get_local $13)
              (get_local $1)
             )
            )
            (get_local $7)
           )
          )
          (br_if $label$11
           (i32.lt_s
            (tee_local $10
             (i32.load
              (get_local $10)
             )
            )
            (i32.const 0)
           )
          )
          (br_if $label$12
           (i32.lt_u
            (tee_local $1
             (i32.add
              (i32.add
               (get_local $1)
               (i32.and
                (get_local $10)
                (i32.const 2147483647)
               )
              )
              (i32.const 4)
             )
            )
            (get_local $2)
           )
          )
         )
        )
        (i32.store
         (get_local $8)
         (i32.or
          (select
           (get_local $1)
           (get_local $2)
           (i32.lt_u
            (get_local $1)
            (get_local $2)
           )
          )
          (i32.and
           (get_local $9)
           (i32.const -2147483648)
          )
         )
        )
        (block $label$13
         (br_if $label$13
          (i32.le_u
           (get_local $1)
           (get_local $2)
          )
         )
         (i32.store
          (i32.add
           (get_local $13)
           (get_local $2)
          )
          (i32.and
           (i32.add
            (get_local $4)
            (get_local $1)
           )
           (i32.const 2147483647)
          )
         )
        )
        (br_if $label$2
         (i32.ge_u
          (get_local $1)
          (get_local $2)
         )
        )
       )
       (br_if $label$9
        (i32.lt_u
         (tee_local $13
          (i32.add
           (i32.add
            (get_local $13)
            (get_local $1)
           )
           (i32.const 4)
          )
         )
         (get_local $7)
        )
       )
      )
      (set_local $1
       (i32.const 0)
      )
      (i32.store
       (get_local $11)
       (tee_local $13
        (select
         (i32.const 0)
         (tee_local $13
          (i32.add
           (i32.load
            (get_local $11)
           )
           (i32.const 1)
          )
         )
         (i32.eq
          (get_local $13)
          (i32.load
           (get_local $12)
          )
         )
        )
       )
      )
      (br_if $label$8
       (i32.ne
        (get_local $13)
        (get_local $3)
       )
      )
     )
    )
    (return
     (get_local $1)
    )
   )
   (i32.store
    (get_local $8)
    (i32.or
     (i32.load
      (get_local $8)
     )
     (i32.const -2147483648)
    )
   )
   (return
    (get_local $13)
   )
  )
  (i32.const 0)
 )
 (func $_ZN5eosio14memory_manager16next_active_heapEv (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (set_local $1
   (i32.load offset=8388
    (get_local $0)
   )
  )
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (i32.load8_u offset=10406
       (i32.const 0)
      )
     )
    )
    (set_local $7
     (i32.load offset=10408
      (i32.const 0)
     )
    )
    (br $label$0)
   )
   (set_local $7
    (current_memory)
   )
   (i32.store8 offset=10406
    (i32.const 0)
    (i32.const 1)
   )
   (i32.store offset=10408
    (i32.const 0)
    (tee_local $7
     (i32.shl
      (get_local $7)
      (i32.const 16)
     )
    )
   )
  )
  (set_local $3
   (get_local $7)
  )
  (block $label$2
   (block $label$3
    (block $label$4
     (block $label$5
      (br_if $label$5
       (i32.le_u
        (tee_local $2
         (i32.shr_u
          (i32.add
           (get_local $7)
           (i32.const 65535)
          )
          (i32.const 16)
         )
        )
        (tee_local $8
         (current_memory)
        )
       )
      )
      (drop
       (grow_memory
        (i32.sub
         (get_local $2)
         (get_local $8)
        )
       )
      )
      (set_local $8
       (i32.const 0)
      )
      (br_if $label$4
       (i32.ne
        (get_local $2)
        (current_memory)
       )
      )
      (set_local $3
       (i32.load offset=10408
        (i32.const 0)
       )
      )
     )
     (set_local $8
      (i32.const 0)
     )
     (i32.store offset=10408
      (i32.const 0)
      (get_local $3)
     )
     (br_if $label$4
      (i32.lt_s
       (get_local $7)
       (i32.const 0)
      )
     )
     (set_local $2
      (i32.add
       (get_local $0)
       (i32.mul
        (get_local $1)
        (i32.const 12)
       )
      )
     )
     (set_local $7
      (i32.sub
       (i32.sub
        (i32.add
         (get_local $7)
         (select
          (i32.const 65536)
          (i32.const 131072)
          (tee_local $6
           (i32.lt_u
            (tee_local $8
             (i32.and
              (get_local $7)
              (i32.const 65535)
             )
            )
            (i32.const 64513)
           )
          )
         )
        )
        (select
         (get_local $8)
         (i32.and
          (get_local $7)
          (i32.const 131071)
         )
         (get_local $6)
        )
       )
       (get_local $7)
      )
     )
     (block $label$6
      (br_if $label$6
       (i32.load8_u offset=10406
        (i32.const 0)
       )
      )
      (set_local $3
       (current_memory)
      )
      (i32.store8 offset=10406
       (i32.const 0)
       (i32.const 1)
      )
      (i32.store offset=10408
       (i32.const 0)
       (tee_local $3
        (i32.shl
         (get_local $3)
         (i32.const 16)
        )
       )
      )
     )
     (set_local $2
      (i32.add
       (get_local $2)
       (i32.const 8192)
      )
     )
     (br_if $label$3
      (i32.lt_s
       (get_local $7)
       (i32.const 0)
      )
     )
     (set_local $6
      (get_local $3)
     )
     (block $label$7
      (br_if $label$7
       (i32.le_u
        (tee_local $8
         (i32.shr_u
          (i32.add
           (i32.add
            (tee_local $5
             (i32.and
              (i32.add
               (get_local $7)
               (i32.const 7)
              )
              (i32.const -8)
             )
            )
            (get_local $3)
           )
           (i32.const 65535)
          )
          (i32.const 16)
         )
        )
        (tee_local $4
         (current_memory)
        )
       )
      )
      (drop
       (grow_memory
        (i32.sub
         (get_local $8)
         (get_local $4)
        )
       )
      )
      (br_if $label$3
       (i32.ne
        (get_local $8)
        (current_memory)
       )
      )
      (set_local $6
       (i32.load offset=10408
        (i32.const 0)
       )
      )
     )
     (i32.store offset=10408
      (i32.const 0)
      (i32.add
       (get_local $6)
       (get_local $5)
      )
     )
     (br_if $label$3
      (i32.eq
       (get_local $3)
       (i32.const -1)
      )
     )
     (br_if $label$2
      (i32.eq
       (i32.add
        (tee_local $6
         (i32.load
          (i32.add
           (tee_local $1
            (i32.add
             (get_local $0)
             (i32.mul
              (get_local $1)
              (i32.const 12)
             )
            )
           )
           (i32.const 8196)
          )
         )
        )
        (tee_local $8
         (i32.load
          (get_local $2)
         )
        )
       )
       (get_local $3)
      )
     )
     (block $label$8
      (br_if $label$8
       (i32.eq
        (get_local $8)
        (tee_local $1
         (i32.load
          (tee_local $5
           (i32.add
            (get_local $1)
            (i32.const 8200)
           )
          )
         )
        )
       )
      )
      (i32.store
       (tee_local $6
        (i32.add
         (get_local $6)
         (get_local $1)
        )
       )
       (i32.or
        (i32.and
         (i32.load
          (get_local $6)
         )
         (i32.const -2147483648)
        )
        (i32.add
         (i32.sub
          (i32.const -4)
          (get_local $1)
         )
         (get_local $8)
        )
       )
      )
      (i32.store
       (get_local $5)
       (i32.load
        (get_local $2)
       )
      )
      (i32.store
       (get_local $6)
       (i32.and
        (i32.load
         (get_local $6)
        )
        (i32.const 2147483647)
       )
      )
     )
     (i32.store
      (tee_local $2
       (i32.add
        (get_local $0)
        (i32.const 8388)
       )
      )
      (tee_local $2
       (i32.add
        (i32.load
         (get_local $2)
        )
        (i32.const 1)
       )
      )
     )
     (i32.store
      (i32.add
       (tee_local $0
        (i32.add
         (get_local $0)
         (i32.mul
          (get_local $2)
          (i32.const 12)
         )
        )
       )
       (i32.const 8196)
      )
      (get_local $3)
     )
     (i32.store
      (tee_local $8
       (i32.add
        (get_local $0)
        (i32.const 8192)
       )
      )
      (get_local $7)
     )
    )
    (return
     (get_local $8)
    )
   )
   (block $label$9
    (br_if $label$9
     (i32.eq
      (tee_local $8
       (i32.load
        (get_local $2)
       )
      )
      (tee_local $7
       (i32.load
        (tee_local $1
         (i32.add
          (tee_local $3
           (i32.add
            (get_local $0)
            (i32.mul
             (get_local $1)
             (i32.const 12)
            )
           )
          )
          (i32.const 8200)
         )
        )
       )
      )
     )
    )
    (i32.store
     (tee_local $3
      (i32.add
       (i32.load
        (i32.add
         (get_local $3)
         (i32.const 8196)
        )
       )
       (get_local $7)
      )
     )
     (i32.or
      (i32.and
       (i32.load
        (get_local $3)
       )
       (i32.const -2147483648)
      )
      (i32.add
       (i32.sub
        (i32.const -4)
        (get_local $7)
       )
       (get_local $8)
      )
     )
    )
    (i32.store
     (get_local $1)
     (i32.load
      (get_local $2)
     )
    )
    (i32.store
     (get_local $3)
     (i32.and
      (i32.load
       (get_local $3)
      )
      (i32.const 2147483647)
     )
    )
   )
   (i32.store offset=8384
    (get_local $0)
    (tee_local $3
     (i32.add
      (i32.load
       (tee_local $7
        (i32.add
         (get_local $0)
         (i32.const 8388)
        )
       )
      )
      (i32.const 1)
     )
    )
   )
   (i32.store
    (get_local $7)
    (get_local $3)
   )
   (return
    (i32.const 0)
   )
  )
  (i32.store
   (get_local $2)
   (i32.add
    (get_local $8)
    (get_local $7)
   )
  )
  (get_local $2)
 )
 (func $free (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (get_local $0)
     )
    )
    (br_if $label$1
     (i32.lt_s
      (tee_local $2
       (i32.load offset=10304
        (i32.const 0)
       )
      )
      (i32.const 1)
     )
    )
    (set_local $3
     (i32.const 10112)
    )
    (set_local $1
     (i32.add
      (i32.mul
       (get_local $2)
       (i32.const 12)
      )
      (i32.const 10112)
     )
    )
    (loop $label$2
     (br_if $label$1
      (i32.eqz
       (tee_local $2
        (i32.load
         (i32.add
          (get_local $3)
          (i32.const 4)
         )
        )
       )
      )
     )
     (block $label$3
      (br_if $label$3
       (i32.gt_u
        (i32.add
         (get_local $2)
         (i32.const 4)
        )
        (get_local $0)
       )
      )
      (br_if $label$0
       (i32.gt_u
        (i32.add
         (get_local $2)
         (i32.load
          (get_local $3)
         )
        )
        (get_local $0)
       )
      )
     )
     (br_if $label$2
      (i32.lt_u
       (tee_local $3
        (i32.add
         (get_local $3)
         (i32.const 12)
        )
       )
       (get_local $1)
      )
     )
    )
   )
   (return)
  )
  (i32.store
   (tee_local $3
    (i32.add
     (get_local $0)
     (i32.const -4)
    )
   )
   (i32.and
    (i32.load
     (get_local $3)
    )
    (i32.const 2147483647)
   )
  )
 )
 (func $_ZNSt3__16__sortIRNS_6__lessIyyEEPyEEvT0_S5_T_ (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (loop $label$0
   (set_local $4
    (i32.add
     (get_local $1)
     (i32.const -16)
    )
   )
   (set_local $3
    (i32.add
     (get_local $1)
     (i32.const -8)
    )
   )
   (loop $label$1
    (set_local $5
     (get_local $0)
    )
    (block $label$2
     (loop $label$3
      (block $label$4
       (block $label$5
        (block $label$6
         (block $label$7
          (block $label$8
           (block $label$9
            (block $label$10
             (block $label$11
              (br_if $label$11
               (i32.le_u
                (tee_local $11
                 (i32.shr_s
                  (tee_local $0
                   (i32.sub
                    (get_local $1)
                    (get_local $5)
                   )
                  )
                  (i32.const 3)
                 )
                )
                (i32.const 5)
               )
              )
              (br_if $label$10
               (i32.le_s
                (get_local $0)
                (i32.const 247)
               )
              )
              (set_local $12
               (i32.add
                (get_local $5)
                (i32.shl
                 (i32.div_s
                  (get_local $11)
                  (i32.const 2)
                 )
                 (i32.const 3)
                )
               )
              )
              (block $label$12
               (br_if $label$12
                (i32.lt_s
                 (get_local $0)
                 (i32.const 7993)
                )
               )
               (set_local $10
                (call $_ZNSt3__17__sort5IRNS_6__lessIyyEEPyEEjT0_S5_S5_S5_S5_T_
                 (get_local $5)
                 (i32.add
                  (get_local $5)
                  (tee_local $0
                   (i32.shl
                    (i32.div_s
                     (get_local $11)
                     (i32.const 4)
                    )
                    (i32.const 3)
                   )
                  )
                 )
                 (get_local $12)
                 (i32.add
                  (get_local $12)
                  (get_local $0)
                 )
                 (get_local $3)
                 (get_local $2)
                )
               )
               (br $label$6)
              )
              (set_local $6
               (i64.load
                (get_local $3)
               )
              )
              (block $label$13
               (block $label$14
                (block $label$15
                 (br_if $label$15
                  (i64.ge_u
                   (tee_local $7
                    (i64.load
                     (get_local $12)
                    )
                   )
                   (tee_local $8
                    (i64.load
                     (get_local $5)
                    )
                   )
                  )
                 )
                 (br_if $label$14
                  (i64.ge_u
                   (get_local $6)
                   (get_local $7)
                  )
                 )
                 (i64.store
                  (get_local $5)
                  (get_local $6)
                 )
                 (i64.store
                  (get_local $3)
                  (get_local $8)
                 )
                 (set_local $10
                  (i32.const 1)
                 )
                 (br $label$6)
                )
                (set_local $10
                 (i32.const 0)
                )
                (br_if $label$6
                 (i64.ge_u
                  (get_local $6)
                  (get_local $7)
                 )
                )
                (i64.store
                 (get_local $12)
                 (get_local $6)
                )
                (i64.store
                 (get_local $3)
                 (get_local $7)
                )
                (set_local $10
                 (i32.const 1)
                )
                (br_if $label$6
                 (i64.ge_u
                  (tee_local $6
                   (i64.load
                    (get_local $12)
                   )
                  )
                  (tee_local $7
                   (i64.load
                    (get_local $5)
                   )
                  )
                 )
                )
                (i64.store
                 (get_local $5)
                 (get_local $6)
                )
                (i64.store
                 (get_local $12)
                 (get_local $7)
                )
                (br $label$13)
               )
               (i64.store
                (get_local $5)
                (get_local $7)
               )
               (i64.store
                (get_local $12)
                (get_local $8)
               )
               (set_local $10
                (i32.const 1)
               )
               (br_if $label$6
                (i64.ge_u
                 (tee_local $6
                  (i64.load
                   (get_local $3)
                  )
                 )
                 (get_local $8)
                )
               )
               (i64.store
                (get_local $12)
                (get_local $6)
               )
               (i64.store
                (get_local $3)
                (get_local $8)
               )
              )
              (set_local $10
               (i32.const 2)
              )
              (br $label$6)
             )
             (block $label$16
              (br_table $label$5 $label$5 $label$16 $label$7 $label$9 $label$8 $label$5
               (get_local $11)
              )
             )
             (br_if $label$5
              (i64.ge_u
               (tee_local $6
                (i64.load
                 (get_local $3)
                )
               )
               (tee_local $7
                (i64.load
                 (get_local $5)
                )
               )
              )
             )
             (i64.store
              (get_local $5)
              (get_local $6)
             )
             (i64.store
              (get_local $3)
              (get_local $7)
             )
             (return)
            )
            (set_local $7
             (i64.load offset=16
              (get_local $5)
             )
            )
            (block $label$17
             (block $label$18
              (block $label$19
               (block $label$20
                (block $label$21
                 (br_if $label$21
                  (i64.ge_u
                   (tee_local $6
                    (i64.load offset=8
                     (get_local $5)
                    )
                   )
                   (tee_local $8
                    (i64.load
                     (get_local $5)
                    )
                   )
                  )
                 )
                 (br_if $label$20
                  (i64.ge_u
                   (get_local $7)
                   (get_local $6)
                  )
                 )
                 (i64.store
                  (get_local $5)
                  (get_local $7)
                 )
                 (i64.store
                  (i32.add
                   (get_local $5)
                   (i32.const 16)
                  )
                  (get_local $8)
                 )
                 (br $label$19)
                )
                (br_if $label$18
                 (i64.ge_u
                  (get_local $7)
                  (get_local $6)
                 )
                )
                (i64.store
                 (i32.add
                  (get_local $5)
                  (i32.const 16)
                 )
                 (get_local $6)
                )
                (i64.store
                 (tee_local $0
                  (i32.add
                   (get_local $5)
                   (i32.const 8)
                  )
                 )
                 (get_local $7)
                )
                (br_if $label$17
                 (i64.ge_u
                  (get_local $7)
                  (get_local $8)
                 )
                )
                (i64.store
                 (get_local $5)
                 (get_local $7)
                )
                (i64.store
                 (get_local $0)
                 (get_local $8)
                )
                (br $label$17)
               )
               (i64.store
                (get_local $5)
                (get_local $6)
               )
               (i64.store
                (tee_local $0
                 (i32.add
                  (get_local $5)
                  (i32.const 8)
                 )
                )
                (get_local $8)
               )
               (br_if $label$18
                (i64.ge_u
                 (get_local $7)
                 (get_local $8)
                )
               )
               (i64.store
                (i32.add
                 (get_local $5)
                 (i32.const 16)
                )
                (get_local $8)
               )
               (i64.store
                (get_local $0)
                (get_local $7)
               )
              )
              (set_local $6
               (get_local $8)
              )
              (br $label$17)
             )
             (set_local $6
              (get_local $7)
             )
            )
            (br_if $label$5
             (i32.eq
              (tee_local $12
               (i32.add
                (get_local $5)
                (i32.const 24)
               )
              )
              (get_local $1)
             )
            )
            (set_local $9
             (i32.const 16)
            )
            (loop $label$22
             (block $label$23
              (br_if $label$23
               (i64.ge_u
                (tee_local $7
                 (i64.load
                  (get_local $12)
                 )
                )
                (get_local $6)
               )
              )
              (set_local $0
               (get_local $9)
              )
              (block $label$24
               (block $label$25
                (block $label$26
                 (loop $label$27
                  (i64.store
                   (i32.add
                    (tee_local $11
                     (i32.add
                      (get_local $5)
                      (get_local $0)
                     )
                    )
                    (i32.const 8)
                   )
                   (get_local $6)
                  )
                  (br_if $label$26
                   (i32.eqz
                    (get_local $0)
                   )
                  )
                  (set_local $0
                   (i32.add
                    (get_local $0)
                    (i32.const -8)
                   )
                  )
                  (br_if $label$27
                   (i64.lt_u
                    (get_local $7)
                    (tee_local $6
                     (i64.load
                      (i32.add
                       (get_local $11)
                       (i32.const -8)
                      )
                     )
                    )
                   )
                  )
                  (br $label$25)
                 )
                )
                (set_local $0
                 (get_local $5)
                )
                (br $label$24)
               )
               (set_local $0
                (i32.add
                 (i32.add
                  (get_local $5)
                  (get_local $0)
                 )
                 (i32.const 8)
                )
               )
              )
              (i64.store
               (get_local $0)
               (get_local $7)
              )
             )
             (br_if $label$5
              (i32.eq
               (tee_local $0
                (i32.add
                 (get_local $12)
                 (i32.const 8)
                )
               )
               (get_local $1)
              )
             )
             (set_local $9
              (i32.add
               (get_local $9)
               (i32.const 8)
              )
             )
             (set_local $6
              (i64.load
               (get_local $12)
              )
             )
             (set_local $12
              (get_local $0)
             )
             (br $label$22)
            )
           )
           (set_local $7
            (i64.load offset=16
             (get_local $5)
            )
           )
           (block $label$28
            (block $label$29
             (block $label$30
              (block $label$31
               (block $label$32
                (br_if $label$32
                 (i64.ge_u
                  (tee_local $6
                   (i64.load offset=8
                    (get_local $5)
                   )
                  )
                  (tee_local $8
                   (i64.load
                    (get_local $5)
                   )
                  )
                 )
                )
                (br_if $label$31
                 (i64.ge_u
                  (get_local $7)
                  (get_local $6)
                 )
                )
                (i64.store
                 (get_local $5)
                 (get_local $7)
                )
                (i64.store
                 (i32.add
                  (get_local $5)
                  (i32.const 16)
                 )
                 (get_local $8)
                )
                (br $label$30)
               )
               (br_if $label$29
                (i64.ge_u
                 (get_local $7)
                 (get_local $6)
                )
               )
               (i64.store
                (i32.add
                 (get_local $5)
                 (i32.const 16)
                )
                (get_local $6)
               )
               (i64.store
                (tee_local $0
                 (i32.add
                  (get_local $5)
                  (i32.const 8)
                 )
                )
                (get_local $7)
               )
               (br_if $label$28
                (i64.ge_u
                 (get_local $7)
                 (get_local $8)
                )
               )
               (i64.store
                (get_local $5)
                (get_local $7)
               )
               (i64.store
                (get_local $0)
                (get_local $8)
               )
               (br $label$28)
              )
              (i64.store
               (get_local $5)
               (get_local $6)
              )
              (i64.store
               (tee_local $0
                (i32.add
                 (get_local $5)
                 (i32.const 8)
                )
               )
               (get_local $8)
              )
              (br_if $label$29
               (i64.ge_u
                (get_local $7)
                (get_local $8)
               )
              )
              (i64.store
               (i32.add
                (get_local $5)
                (i32.const 16)
               )
               (get_local $8)
              )
              (i64.store
               (get_local $0)
               (get_local $7)
              )
             )
             (set_local $6
              (get_local $8)
             )
             (br $label$28)
            )
            (set_local $6
             (get_local $7)
            )
           )
           (br_if $label$5
            (i64.ge_u
             (tee_local $7
              (i64.load
               (get_local $3)
              )
             )
             (get_local $6)
            )
           )
           (i64.store
            (tee_local $0
             (i32.add
              (get_local $5)
              (i32.const 16)
             )
            )
            (get_local $7)
           )
           (i64.store
            (get_local $3)
            (get_local $6)
           )
           (br_if $label$5
            (i64.ge_u
             (tee_local $6
              (i64.load
               (get_local $0)
              )
             )
             (tee_local $7
              (i64.load
               (tee_local $11
                (i32.add
                 (get_local $5)
                 (i32.const 8)
                )
               )
              )
             )
            )
           )
           (i64.store
            (get_local $0)
            (get_local $7)
           )
           (i64.store
            (get_local $11)
            (get_local $6)
           )
           (br_if $label$5
            (i64.ge_u
             (get_local $6)
             (tee_local $7
              (i64.load
               (get_local $5)
              )
             )
            )
           )
           (i64.store
            (get_local $5)
            (get_local $6)
           )
           (i64.store
            (i32.add
             (get_local $5)
             (i32.const 8)
            )
            (get_local $7)
           )
           (return)
          )
          (drop
           (call $_ZNSt3__17__sort5IRNS_6__lessIyyEEPyEEjT0_S5_S5_S5_S5_T_
            (get_local $5)
            (i32.add
             (get_local $5)
             (i32.const 8)
            )
            (i32.add
             (get_local $5)
             (i32.const 16)
            )
            (i32.add
             (get_local $5)
             (i32.const 24)
            )
            (get_local $3)
            (get_local $2)
           )
          )
          (return)
         )
         (set_local $6
          (i64.load
           (get_local $3)
          )
         )
         (block $label$33
          (block $label$34
           (br_if $label$34
            (i64.ge_u
             (tee_local $7
              (i64.load offset=8
               (get_local $5)
              )
             )
             (tee_local $8
              (i64.load
               (get_local $5)
              )
             )
            )
           )
           (br_if $label$33
            (i64.ge_u
             (get_local $6)
             (get_local $7)
            )
           )
           (i64.store
            (get_local $5)
            (get_local $6)
           )
           (i64.store
            (get_local $3)
            (get_local $8)
           )
           (return)
          )
          (br_if $label$5
           (i64.ge_u
            (get_local $6)
            (get_local $7)
           )
          )
          (i64.store
           (tee_local $0
            (i32.add
             (get_local $5)
             (i32.const 8)
            )
           )
           (get_local $6)
          )
          (i64.store
           (get_local $3)
           (get_local $7)
          )
          (br_if $label$5
           (i64.ge_u
            (tee_local $6
             (i64.load
              (get_local $0)
             )
            )
            (tee_local $7
             (i64.load
              (get_local $5)
             )
            )
           )
          )
          (i64.store
           (get_local $5)
           (get_local $6)
          )
          (i64.store
           (get_local $0)
           (get_local $7)
          )
          (return)
         )
         (i64.store
          (get_local $5)
          (get_local $7)
         )
         (i64.store
          (tee_local $0
           (i32.add
            (get_local $5)
            (i32.const 8)
           )
          )
          (get_local $8)
         )
         (br_if $label$5
          (i64.ge_u
           (tee_local $6
            (i64.load
             (get_local $3)
            )
           )
           (get_local $8)
          )
         )
         (i64.store
          (get_local $0)
          (get_local $6)
         )
         (i64.store
          (get_local $3)
          (get_local $8)
         )
         (return)
        )
        (block $label$35
         (block $label$36
          (br_if $label$36
           (i64.lt_u
            (tee_local $8
             (i64.load
              (get_local $5)
             )
            )
            (tee_local $7
             (i64.load
              (get_local $12)
             )
            )
           )
          )
          (set_local $0
           (get_local $4)
          )
          (block $label$37
           (block $label$38
            (loop $label$39
             (br_if $label$38
              (i32.eq
               (get_local $5)
               (get_local $0)
              )
             )
             (set_local $6
              (i64.load
               (get_local $0)
              )
             )
             (set_local $0
              (tee_local $11
               (i32.add
                (get_local $0)
                (i32.const -8)
               )
              )
             )
             (br_if $label$39
              (i64.ge_u
               (get_local $6)
               (get_local $7)
              )
             )
             (br $label$37)
            )
           )
           (set_local $12
            (i32.add
             (get_local $5)
             (i32.const 8)
            )
           )
           (block $label$40
            (br_if $label$40
             (i64.lt_u
              (get_local $8)
              (tee_local $7
               (i64.load
                (get_local $3)
               )
              )
             )
            )
            (br_if $label$5
             (i32.eq
              (get_local $12)
              (get_local $3)
             )
            )
            (set_local $12
             (i32.add
              (get_local $5)
              (i32.const 16)
             )
            )
            (block $label$41
             (loop $label$42
              (br_if $label$41
               (i64.lt_u
                (get_local $8)
                (tee_local $6
                 (i64.load
                  (tee_local $0
                   (i32.add
                    (get_local $12)
                    (i32.const -8)
                   )
                  )
                 )
                )
               )
              )
              (br_if $label$42
               (i32.ne
                (get_local $1)
                (tee_local $12
                 (i32.add
                  (get_local $12)
                  (i32.const 8)
                 )
                )
               )
              )
              (br $label$5)
             )
            )
            (i64.store
             (get_local $0)
             (get_local $7)
            )
            (i64.store
             (get_local $3)
             (get_local $6)
            )
           )
           (br_if $label$5
            (i32.eq
             (get_local $12)
             (get_local $3)
            )
           )
           (set_local $11
            (get_local $3)
           )
           (loop $label$43
            (set_local $0
             (i32.add
              (get_local $12)
              (i32.const -8)
             )
            )
            (set_local $6
             (i64.load
              (get_local $5)
             )
            )
            (loop $label$44
             (br_if $label$44
              (i64.ge_u
               (get_local $6)
               (tee_local $7
                (i64.load
                 (tee_local $0
                  (i32.add
                   (get_local $0)
                   (i32.const 8)
                  )
                 )
                )
               )
              )
             )
            )
            (set_local $12
             (i32.add
              (get_local $0)
              (i32.const 8)
             )
            )
            (loop $label$45
             (br_if $label$45
              (i64.lt_u
               (get_local $6)
               (tee_local $8
                (i64.load
                 (tee_local $11
                  (i32.add
                   (get_local $11)
                   (i32.const -8)
                  )
                 )
                )
               )
              )
             )
            )
            (br_if $label$4
             (i32.ge_u
              (get_local $0)
              (get_local $11)
             )
            )
            (i64.store
             (get_local $0)
             (get_local $8)
            )
            (i64.store
             (get_local $11)
             (get_local $7)
            )
            (br $label$43)
           )
          )
          (i64.store
           (get_local $5)
           (get_local $6)
          )
          (i64.store
           (tee_local $11
            (i32.add
             (get_local $11)
             (i32.const 8)
            )
           )
           (get_local $8)
          )
          (set_local $10
           (i32.add
            (get_local $10)
            (i32.const 1)
           )
          )
          (br $label$35)
         )
         (set_local $11
          (get_local $3)
         )
        )
        (block $label$46
         (br_if $label$46
          (i32.ge_u
           (tee_local $9
            (i32.add
             (get_local $5)
             (i32.const 8)
            )
           )
           (get_local $11)
          )
         )
         (loop $label$47
          (set_local $0
           (i32.add
            (get_local $9)
            (i32.const -8)
           )
          )
          (set_local $6
           (i64.load
            (get_local $12)
           )
          )
          (loop $label$48
           (br_if $label$48
            (i64.lt_u
             (tee_local $7
              (i64.load
               (tee_local $0
                (i32.add
                 (get_local $0)
                 (i32.const 8)
                )
               )
              )
             )
             (get_local $6)
            )
           )
          )
          (set_local $9
           (i32.add
            (get_local $0)
            (i32.const 8)
           )
          )
          (loop $label$49
           (br_if $label$49
            (i64.ge_u
             (tee_local $8
              (i64.load
               (tee_local $11
                (i32.add
                 (get_local $11)
                 (i32.const -8)
                )
               )
              )
             )
             (get_local $6)
            )
           )
          )
          (block $label$50
           (br_if $label$50
            (i32.gt_u
             (get_local $0)
             (get_local $11)
            )
           )
           (i64.store
            (get_local $0)
            (get_local $8)
           )
           (i64.store
            (get_local $11)
            (get_local $7)
           )
           (set_local $12
            (select
             (get_local $11)
             (get_local $12)
             (i32.eq
              (get_local $12)
              (get_local $0)
             )
            )
           )
           (set_local $10
            (i32.add
             (get_local $10)
             (i32.const 1)
            )
           )
           (br $label$47)
          )
         )
         (set_local $9
          (get_local $0)
         )
        )
        (block $label$51
         (br_if $label$51
          (i32.eq
           (get_local $9)
           (get_local $12)
          )
         )
         (br_if $label$51
          (i64.ge_u
           (tee_local $6
            (i64.load
             (get_local $12)
            )
           )
           (tee_local $7
            (i64.load
             (get_local $9)
            )
           )
          )
         )
         (i64.store
          (get_local $9)
          (get_local $6)
         )
         (i64.store
          (get_local $12)
          (get_local $7)
         )
         (set_local $10
          (i32.add
           (get_local $10)
           (i32.const 1)
          )
         )
        )
        (block $label$52
         (block $label$53
          (br_if $label$53
           (get_local $10)
          )
          (set_local $11
           (call $_ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIyyEEPyEEbT0_S5_T_
            (get_local $5)
            (get_local $9)
            (get_local $2)
           )
          )
          (br_if $label$52
           (call $_ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIyyEEPyEEbT0_S5_T_
            (tee_local $0
             (i32.add
              (get_local $9)
              (i32.const 8)
             )
            )
            (get_local $1)
            (get_local $2)
           )
          )
          (br_if $label$1
           (get_local $11)
          )
         )
         (br_if $label$2
          (i32.ge_s
           (i32.sub
            (get_local $9)
            (get_local $5)
           )
           (i32.sub
            (get_local $1)
            (get_local $9)
           )
          )
         )
         (call $_ZNSt3__16__sortIRNS_6__lessIyyEEPyEEvT0_S5_T_
          (get_local $5)
          (get_local $9)
          (get_local $2)
         )
         (set_local $0
          (i32.add
           (get_local $9)
           (i32.const 8)
          )
         )
         (br $label$1)
        )
        (set_local $1
         (get_local $9)
        )
        (set_local $0
         (get_local $5)
        )
        (br_if $label$0
         (i32.eqz
          (get_local $11)
         )
        )
       )
       (return)
      )
      (set_local $5
       (get_local $0)
      )
      (br $label$3)
     )
    )
   )
   (call $_ZNSt3__16__sortIRNS_6__lessIyyEEPyEEvT0_S5_T_
    (i32.add
     (get_local $9)
     (i32.const 8)
    )
    (get_local $1)
    (get_local $2)
   )
   (set_local $1
    (get_local $9)
   )
   (set_local $0
    (get_local $5)
   )
   (br $label$0)
  )
 )
 (func $_ZNSt3__17__sort5IRNS_6__lessIyyEEPyEEjT0_S5_S5_S5_S5_T_ (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (result i32)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (set_local $7
   (i64.load
    (get_local $2)
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (br_if $label$4
        (i64.ge_u
         (tee_local $8
          (i64.load
           (get_local $1)
          )
         )
         (tee_local $6
          (i64.load
           (get_local $0)
          )
         )
        )
       )
       (br_if $label$3
        (i64.ge_u
         (get_local $7)
         (get_local $8)
        )
       )
       (i64.store
        (get_local $0)
        (get_local $7)
       )
       (i64.store
        (get_local $2)
        (get_local $6)
       )
       (set_local $9
        (i32.const 1)
       )
       (br $label$2)
      )
      (set_local $9
       (i32.const 0)
      )
      (br_if $label$1
       (i64.ge_u
        (get_local $7)
        (get_local $8)
       )
      )
      (i64.store
       (get_local $1)
       (get_local $7)
      )
      (i64.store
       (get_local $2)
       (get_local $8)
      )
      (set_local $9
       (i32.const 1)
      )
      (br_if $label$0
       (i64.ge_u
        (tee_local $7
         (i64.load
          (get_local $1)
         )
        )
        (tee_local $6
         (i64.load
          (get_local $0)
         )
        )
       )
      )
      (i64.store
       (get_local $0)
       (get_local $7)
      )
      (i64.store
       (get_local $1)
       (get_local $6)
      )
      (set_local $8
       (i64.load
        (get_local $2)
       )
      )
      (set_local $9
       (i32.const 2)
      )
      (br $label$0)
     )
     (i64.store
      (get_local $0)
      (get_local $8)
     )
     (i64.store
      (get_local $1)
      (get_local $6)
     )
     (set_local $9
      (i32.const 1)
     )
     (br_if $label$0
      (i64.ge_u
       (tee_local $8
        (i64.load
         (get_local $2)
        )
       )
       (get_local $6)
      )
     )
     (i64.store
      (get_local $1)
      (get_local $8)
     )
     (i64.store
      (get_local $2)
      (get_local $6)
     )
     (set_local $9
      (i32.const 2)
     )
    )
    (set_local $8
     (get_local $6)
    )
    (br $label$0)
   )
   (set_local $8
    (get_local $7)
   )
  )
  (block $label$5
   (br_if $label$5
    (i64.ge_u
     (tee_local $7
      (i64.load
       (get_local $3)
      )
     )
     (get_local $8)
    )
   )
   (i64.store
    (get_local $2)
    (get_local $7)
   )
   (i64.store
    (get_local $3)
    (get_local $8)
   )
   (block $label$6
    (block $label$7
     (br_if $label$7
      (i64.ge_u
       (tee_local $8
        (i64.load
         (get_local $2)
        )
       )
       (tee_local $7
        (i64.load
         (get_local $1)
        )
       )
      )
     )
     (i64.store
      (get_local $1)
      (get_local $8)
     )
     (i64.store
      (get_local $2)
      (get_local $7)
     )
     (br_if $label$6
      (i64.ge_u
       (tee_local $8
        (i64.load
         (get_local $1)
        )
       )
       (tee_local $7
        (i64.load
         (get_local $0)
        )
       )
      )
     )
     (i64.store
      (get_local $0)
      (get_local $8)
     )
     (i64.store
      (get_local $1)
      (get_local $7)
     )
     (set_local $9
      (i32.add
       (get_local $9)
       (i32.const 3)
      )
     )
     (br $label$5)
    )
    (set_local $9
     (i32.add
      (get_local $9)
      (i32.const 1)
     )
    )
    (br $label$5)
   )
   (set_local $9
    (i32.add
     (get_local $9)
     (i32.const 2)
    )
   )
  )
  (block $label$8
   (block $label$9
    (block $label$10
     (block $label$11
      (br_if $label$11
       (i64.ge_u
        (tee_local $8
         (i64.load
          (get_local $4)
         )
        )
        (tee_local $7
         (i64.load
          (get_local $3)
         )
        )
       )
      )
      (i64.store
       (get_local $3)
       (get_local $8)
      )
      (i64.store
       (get_local $4)
       (get_local $7)
      )
      (br_if $label$10
       (i64.ge_u
        (tee_local $8
         (i64.load
          (get_local $3)
         )
        )
        (tee_local $7
         (i64.load
          (get_local $2)
         )
        )
       )
      )
      (i64.store
       (get_local $2)
       (get_local $8)
      )
      (i64.store
       (get_local $3)
       (get_local $7)
      )
      (br_if $label$9
       (i64.ge_u
        (tee_local $8
         (i64.load
          (get_local $2)
         )
        )
        (tee_local $7
         (i64.load
          (get_local $1)
         )
        )
       )
      )
      (i64.store
       (get_local $1)
       (get_local $8)
      )
      (i64.store
       (get_local $2)
       (get_local $7)
      )
      (br_if $label$8
       (i64.ge_u
        (tee_local $8
         (i64.load
          (get_local $1)
         )
        )
        (tee_local $7
         (i64.load
          (get_local $0)
         )
        )
       )
      )
      (i64.store
       (get_local $0)
       (get_local $8)
      )
      (i64.store
       (get_local $1)
       (get_local $7)
      )
      (set_local $9
       (i32.add
        (get_local $9)
        (i32.const 4)
       )
      )
     )
     (return
      (get_local $9)
     )
    )
    (return
     (i32.add
      (get_local $9)
      (i32.const 1)
     )
    )
   )
   (return
    (i32.add
     (get_local $9)
     (i32.const 2)
    )
   )
  )
  (i32.add
   (get_local $9)
   (i32.const 3)
  )
 )
 (func $_ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIyyEEPyEEbT0_S5_T_ (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i64)
  (local $8 i32)
  (local $9 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (block $label$6
         (block $label$7
          (block $label$8
           (block $label$9
            (block $label$10
             (block $label$11
              (block $label$12
               (block $label$13
                (block $label$14
                 (block $label$15
                  (block $label$16
                   (br_if $label$16
                    (i32.gt_u
                     (tee_local $6
                      (i32.shr_s
                       (i32.sub
                        (get_local $1)
                        (get_local $0)
                       )
                       (i32.const 3)
                      )
                     )
                     (i32.const 5)
                    )
                   )
                   (set_local $9
                    (i32.const 1)
                   )
                   (block $label$17
                    (br_table $label$0 $label$0 $label$17 $label$15 $label$13 $label$14 $label$0
                     (get_local $6)
                    )
                   )
                   (br_if $label$0
                    (i64.ge_u
                     (tee_local $7
                      (i64.load
                       (tee_local $6
                        (i32.add
                         (get_local $1)
                         (i32.const -8)
                        )
                       )
                      )
                     )
                     (tee_local $5
                      (i64.load
                       (get_local $0)
                      )
                     )
                    )
                   )
                   (i64.store
                    (get_local $0)
                    (get_local $7)
                   )
                   (i64.store
                    (get_local $6)
                    (get_local $5)
                   )
                   (br $label$0)
                  )
                  (set_local $5
                   (i64.load offset=16
                    (get_local $0)
                   )
                  )
                  (br_if $label$12
                   (i64.ge_u
                    (tee_local $7
                     (i64.load offset=8
                      (get_local $0)
                     )
                    )
                    (tee_local $3
                     (i64.load
                      (get_local $0)
                     )
                    )
                   )
                  )
                  (br_if $label$9
                   (i64.ge_u
                    (get_local $5)
                    (get_local $7)
                   )
                  )
                  (i64.store
                   (get_local $0)
                   (get_local $5)
                  )
                  (i64.store
                   (i32.add
                    (get_local $0)
                    (i32.const 16)
                   )
                   (get_local $3)
                  )
                  (br $label$8)
                 )
                 (set_local $7
                  (i64.load
                   (tee_local $6
                    (i32.add
                     (get_local $1)
                     (i32.const -8)
                    )
                   )
                  )
                 )
                 (br_if $label$11
                  (i64.ge_u
                   (tee_local $5
                    (i64.load offset=8
                     (get_local $0)
                    )
                   )
                   (tee_local $3
                    (i64.load
                     (get_local $0)
                    )
                   )
                  )
                 )
                 (br_if $label$1
                  (i64.ge_u
                   (get_local $7)
                   (get_local $5)
                  )
                 )
                 (i64.store
                  (get_local $0)
                  (get_local $7)
                 )
                 (i64.store
                  (get_local $6)
                  (get_local $3)
                 )
                 (br $label$0)
                )
                (drop
                 (call $_ZNSt3__17__sort5IRNS_6__lessIyyEEPyEEjT0_S5_S5_S5_S5_T_
                  (get_local $0)
                  (i32.add
                   (get_local $0)
                   (i32.const 8)
                  )
                  (i32.add
                   (get_local $0)
                   (i32.const 16)
                  )
                  (i32.add
                   (get_local $0)
                   (i32.const 24)
                  )
                  (i32.add
                   (get_local $1)
                   (i32.const -8)
                  )
                  (get_local $2)
                 )
                )
                (br $label$0)
               )
               (set_local $6
                (i32.add
                 (get_local $1)
                 (i32.const -8)
                )
               )
               (set_local $5
                (i64.load offset=16
                 (get_local $0)
                )
               )
               (br_if $label$10
                (i64.ge_u
                 (tee_local $7
                  (i64.load offset=8
                   (get_local $0)
                  )
                 )
                 (tee_local $3
                  (i64.load
                   (get_local $0)
                  )
                 )
                )
               )
               (br_if $label$5
                (i64.ge_u
                 (get_local $5)
                 (get_local $7)
                )
               )
               (i64.store
                (get_local $0)
                (get_local $5)
               )
               (i64.store
                (i32.add
                 (get_local $0)
                 (i32.const 16)
                )
                (get_local $3)
               )
               (br $label$4)
              )
              (br_if $label$7
               (i64.ge_u
                (get_local $5)
                (get_local $7)
               )
              )
              (i64.store
               (i32.add
                (get_local $0)
                (i32.const 16)
               )
               (get_local $7)
              )
              (i64.store
               (tee_local $9
                (i32.add
                 (get_local $0)
                 (i32.const 8)
                )
               )
               (get_local $5)
              )
              (br_if $label$6
               (i64.ge_u
                (get_local $5)
                (get_local $3)
               )
              )
              (i64.store
               (get_local $0)
               (get_local $5)
              )
              (i64.store
               (get_local $9)
               (get_local $3)
              )
              (br $label$6)
             )
             (br_if $label$0
              (i64.ge_u
               (get_local $7)
               (get_local $5)
              )
             )
             (i64.store
              (tee_local $2
               (i32.add
                (get_local $0)
                (i32.const 8)
               )
              )
              (get_local $7)
             )
             (i64.store
              (get_local $6)
              (get_local $5)
             )
             (br_if $label$0
              (i64.ge_u
               (tee_local $7
                (i64.load
                 (get_local $2)
                )
               )
               (tee_local $5
                (i64.load
                 (get_local $0)
                )
               )
              )
             )
             (i64.store
              (get_local $0)
              (get_local $7)
             )
             (i64.store
              (get_local $2)
              (get_local $5)
             )
             (br $label$0)
            )
            (br_if $label$3
             (i64.ge_u
              (get_local $5)
              (get_local $7)
             )
            )
            (i64.store
             (i32.add
              (get_local $0)
              (i32.const 16)
             )
             (get_local $7)
            )
            (i64.store
             (tee_local $2
              (i32.add
               (get_local $0)
               (i32.const 8)
              )
             )
             (get_local $5)
            )
            (br_if $label$2
             (i64.ge_u
              (get_local $5)
              (get_local $3)
             )
            )
            (i64.store
             (get_local $0)
             (get_local $5)
            )
            (i64.store
             (get_local $2)
             (get_local $3)
            )
            (br $label$2)
           )
           (i64.store
            (get_local $0)
            (get_local $7)
           )
           (i64.store
            (tee_local $9
             (i32.add
              (get_local $0)
              (i32.const 8)
             )
            )
            (get_local $3)
           )
           (br_if $label$7
            (i64.ge_u
             (get_local $5)
             (get_local $3)
            )
           )
           (i64.store
            (i32.add
             (get_local $0)
             (i32.const 16)
            )
            (get_local $3)
           )
           (i64.store
            (get_local $9)
            (get_local $5)
           )
          )
          (set_local $7
           (get_local $3)
          )
          (br $label$6)
         )
         (set_local $7
          (get_local $5)
         )
        )
        (block $label$18
         (block $label$19
          (br_if $label$19
           (i32.eq
            (tee_local $2
             (i32.add
              (get_local $0)
              (i32.const 24)
             )
            )
            (get_local $1)
           )
          )
          (set_local $8
           (i32.const 0)
          )
          (set_local $4
           (i32.const 16)
          )
          (loop $label$20
           (block $label$21
            (br_if $label$21
             (i64.ge_u
              (tee_local $5
               (i64.load
                (get_local $2)
               )
              )
              (get_local $7)
             )
            )
            (set_local $9
             (get_local $4)
            )
            (block $label$22
             (block $label$23
              (block $label$24
               (loop $label$25
                (i64.store
                 (i32.add
                  (tee_local $6
                   (i32.add
                    (get_local $0)
                    (get_local $9)
                   )
                  )
                  (i32.const 8)
                 )
                 (get_local $7)
                )
                (br_if $label$24
                 (i32.eqz
                  (get_local $9)
                 )
                )
                (set_local $9
                 (i32.add
                  (get_local $9)
                  (i32.const -8)
                 )
                )
                (br_if $label$25
                 (i64.lt_u
                  (get_local $5)
                  (tee_local $7
                   (i64.load
                    (i32.add
                     (get_local $6)
                     (i32.const -8)
                    )
                   )
                  )
                 )
                )
                (br $label$23)
               )
              )
              (set_local $9
               (get_local $0)
              )
              (br $label$22)
             )
             (set_local $9
              (i32.add
               (i32.add
                (get_local $0)
                (get_local $9)
               )
               (i32.const 8)
              )
             )
            )
            (i64.store
             (get_local $9)
             (get_local $5)
            )
            (br_if $label$18
             (i32.eq
              (tee_local $8
               (i32.add
                (get_local $8)
                (i32.const 1)
               )
              )
              (i32.const 8)
             )
            )
           )
           (br_if $label$19
            (i32.eq
             (tee_local $9
              (i32.add
               (get_local $2)
               (i32.const 8)
              )
             )
             (get_local $1)
            )
           )
           (set_local $4
            (i32.add
             (get_local $4)
             (i32.const 8)
            )
           )
           (set_local $7
            (i64.load
             (get_local $2)
            )
           )
           (set_local $2
            (get_local $9)
           )
           (br $label$20)
          )
         )
         (set_local $9
          (i32.or
           (i32.const 0)
           (i32.const 1)
          )
         )
         (br $label$0)
        )
        (set_local $9
         (i32.or
          (i32.eq
           (i32.add
            (get_local $2)
            (i32.const 8)
           )
           (get_local $1)
          )
          (i32.const 0)
         )
        )
        (br $label$0)
       )
       (i64.store
        (get_local $0)
        (get_local $7)
       )
       (i64.store
        (tee_local $2
         (i32.add
          (get_local $0)
          (i32.const 8)
         )
        )
        (get_local $3)
       )
       (br_if $label$3
        (i64.ge_u
         (get_local $5)
         (get_local $3)
        )
       )
       (i64.store
        (i32.add
         (get_local $0)
         (i32.const 16)
        )
        (get_local $3)
       )
       (i64.store
        (get_local $2)
        (get_local $5)
       )
      )
      (set_local $7
       (get_local $3)
      )
      (br $label$2)
     )
     (set_local $7
      (get_local $5)
     )
    )
    (br_if $label$0
     (i64.ge_u
      (tee_local $5
       (i64.load
        (get_local $6)
       )
      )
      (get_local $7)
     )
    )
    (i64.store
     (tee_local $2
      (i32.add
       (get_local $0)
       (i32.const 16)
      )
     )
     (get_local $5)
    )
    (i64.store
     (get_local $6)
     (get_local $7)
    )
    (br_if $label$0
     (i64.ge_u
      (tee_local $7
       (i64.load
        (get_local $2)
       )
      )
      (tee_local $5
       (i64.load
        (tee_local $6
         (i32.add
          (get_local $0)
          (i32.const 8)
         )
        )
       )
      )
     )
    )
    (i64.store
     (get_local $2)
     (get_local $5)
    )
    (i64.store
     (get_local $6)
     (get_local $7)
    )
    (br_if $label$0
     (i64.ge_u
      (get_local $7)
      (tee_local $5
       (i64.load
        (get_local $0)
       )
      )
     )
    )
    (i64.store
     (get_local $0)
     (get_local $7)
    )
    (i64.store
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
     (get_local $5)
    )
    (br $label$0)
   )
   (i64.store
    (get_local $0)
    (get_local $5)
   )
   (i64.store
    (tee_local $0
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
    (get_local $3)
   )
   (br_if $label$0
    (i64.ge_u
     (tee_local $7
      (i64.load
       (get_local $6)
      )
     )
     (get_local $3)
    )
   )
   (i64.store
    (get_local $0)
    (get_local $7)
   )
   (i64.store
    (get_local $6)
    (get_local $3)
   )
  )
  (i32.and
   (get_local $9)
   (i32.const 1)
  )
 )
 (func $_Znwj (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (block $label$0
   (br_if $label$0
    (tee_local $0
     (call $malloc
      (tee_local $1
       (select
        (get_local $0)
        (i32.const 1)
        (get_local $0)
       )
      )
     )
    )
   )
   (loop $label$1
    (set_local $0
     (i32.const 0)
    )
    (br_if $label$0
     (i32.eqz
      (tee_local $2
       (i32.load offset=10412
        (i32.const 0)
       )
      )
     )
    )
    (call_indirect (type $FUNCSIG$v)
     (get_local $2)
    )
    (br_if $label$1
     (i32.eqz
      (tee_local $0
       (call $malloc
        (get_local $1)
       )
      )
     )
    )
   )
  )
  (get_local $0)
 )
 (func $_ZdlPv (param $0 i32)
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (get_local $0)
    )
   )
   (call $free
    (get_local $0)
   )
  )
 )
 (func $_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv (param $0 i32)
  (call $abort)
  (unreachable)
 )
 (func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_ (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.eq
        (get_local $0)
        (get_local $1)
       )
      )
      (set_local $2
       (select
        (i32.load offset=4
         (get_local $1)
        )
        (i32.shr_u
         (tee_local $2
          (i32.load8_u
           (get_local $1)
          )
         )
         (i32.const 1)
        )
        (tee_local $4
         (i32.and
          (get_local $2)
          (i32.const 1)
         )
        )
       )
      )
      (set_local $5
       (i32.add
        (get_local $1)
        (i32.const 1)
       )
      )
      (set_local $6
       (i32.load offset=8
        (get_local $1)
       )
      )
      (set_local $1
       (i32.const 10)
      )
      (block $label$4
       (br_if $label$4
        (i32.eqz
         (i32.and
          (tee_local $3
           (i32.load8_u
            (get_local $0)
           )
          )
          (i32.const 1)
         )
        )
       )
       (set_local $1
        (i32.add
         (i32.and
          (tee_local $3
           (i32.load
            (get_local $0)
           )
          )
          (i32.const -2)
         )
         (i32.const -1)
        )
       )
      )
      (set_local $5
       (select
        (get_local $6)
        (get_local $5)
        (get_local $4)
       )
      )
      (set_local $4
       (i32.and
        (get_local $3)
        (i32.const 1)
       )
      )
      (block $label$5
       (block $label$6
        (block $label$7
         (br_if $label$7
          (i32.le_u
           (get_local $2)
           (get_local $1)
          )
         )
         (br_if $label$6
          (get_local $4)
         )
         (set_local $3
          (i32.shr_u
           (i32.and
            (get_local $3)
            (i32.const 254)
           )
           (i32.const 1)
          )
         )
         (br $label$5)
        )
        (br_if $label$2
         (get_local $4)
        )
        (set_local $1
         (i32.add
          (get_local $0)
          (i32.const 1)
         )
        )
        (br_if $label$1
         (get_local $2)
        )
        (br $label$0)
       )
       (set_local $3
        (i32.load offset=4
         (get_local $0)
        )
       )
      )
      (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc
       (get_local $0)
       (get_local $1)
       (i32.sub
        (get_local $2)
        (get_local $1)
       )
       (get_local $3)
       (i32.const 0)
       (get_local $3)
       (get_local $2)
       (get_local $5)
      )
     )
     (return
      (get_local $0)
     )
    )
    (set_local $1
     (i32.load offset=8
      (get_local $0)
     )
    )
    (br_if $label$0
     (i32.eqz
      (get_local $2)
     )
    )
   )
   (drop
    (call $memmove
     (get_local $1)
     (get_local $5)
     (get_local $2)
    )
   )
  )
  (i32.store8
   (i32.add
    (get_local $1)
    (get_local $2)
   )
   (i32.const 0)
  )
  (block $label$8
   (br_if $label$8
    (i32.and
     (i32.load8_u
      (get_local $0)
     )
     (i32.const 1)
    )
   )
   (i32.store8
    (get_local $0)
    (i32.shl
     (get_local $2)
     (i32.const 1)
    )
   )
   (return
    (get_local $0)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (get_local $2)
  )
  (get_local $0)
 )
 (func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32) (param $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (block $label$0
   (br_if $label$0
    (i32.lt_u
     (i32.sub
      (i32.const -18)
      (get_local $1)
     )
     (get_local $2)
    )
   )
   (block $label$1
    (block $label$2
     (br_if $label$2
      (i32.and
       (i32.load8_u
        (get_local $0)
       )
       (i32.const 1)
      )
     )
     (set_local $9
      (i32.add
       (get_local $0)
       (i32.const 1)
      )
     )
     (br $label$1)
    )
    (set_local $9
     (i32.load offset=8
      (get_local $0)
     )
    )
   )
   (set_local $10
    (i32.const -17)
   )
   (block $label$3
    (br_if $label$3
     (i32.gt_u
      (get_local $1)
      (i32.const 2147483622)
     )
    )
    (set_local $10
     (i32.const 11)
    )
    (br_if $label$3
     (i32.lt_u
      (tee_local $2
       (select
        (tee_local $8
         (i32.shl
          (get_local $1)
          (i32.const 1)
         )
        )
        (tee_local $2
         (i32.add
          (get_local $2)
          (get_local $1)
         )
        )
        (i32.lt_u
         (get_local $2)
         (get_local $8)
        )
       )
      )
      (i32.const 11)
     )
    )
    (set_local $10
     (i32.and
      (i32.add
       (get_local $2)
       (i32.const 16)
      )
      (i32.const -16)
     )
    )
   )
   (set_local $2
    (call $_Znwj
     (get_local $10)
    )
   )
   (block $label$4
    (br_if $label$4
     (i32.eqz
      (get_local $4)
     )
    )
    (drop
     (call $memcpy
      (get_local $2)
      (get_local $9)
      (get_local $4)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.eqz
      (get_local $6)
     )
    )
    (drop
     (call $memcpy
      (i32.add
       (get_local $2)
       (get_local $4)
      )
      (get_local $7)
      (get_local $6)
     )
    )
   )
   (block $label$6
    (br_if $label$6
     (i32.eqz
      (tee_local $7
       (i32.sub
        (tee_local $3
         (i32.sub
          (get_local $3)
          (get_local $5)
         )
        )
        (get_local $4)
       )
      )
     )
    )
    (drop
     (call $memcpy
      (i32.add
       (i32.add
        (get_local $2)
        (get_local $4)
       )
       (get_local $6)
      )
      (i32.add
       (i32.add
        (get_local $9)
        (get_local $4)
       )
       (get_local $5)
      )
      (get_local $7)
     )
    )
   )
   (block $label$7
    (br_if $label$7
     (i32.eq
      (get_local $1)
      (i32.const 10)
     )
    )
    (call $_ZdlPv
     (get_local $9)
    )
   )
   (i32.store offset=8
    (get_local $0)
    (get_local $2)
   )
   (i32.store
    (get_local $0)
    (i32.or
     (get_local $10)
     (i32.const 1)
    )
   )
   (i32.store offset=4
    (get_local $0)
    (tee_local $4
     (i32.add
      (get_local $3)
      (get_local $6)
     )
    )
   )
   (i32.store8
    (i32.add
     (get_local $2)
     (get_local $4)
    )
    (i32.const 0)
   )
   (return)
  )
  (call $abort)
  (unreachable)
 )
 (func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (br_if $label$0
    (i32.ge_u
     (get_local $1)
     (i32.const -16)
    )
   )
   (set_local $2
    (i32.const 10)
   )
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (i32.and
       (tee_local $5
        (i32.load8_u
         (get_local $0)
        )
       )
       (i32.const 1)
      )
     )
    )
    (set_local $2
     (i32.add
      (i32.and
       (tee_local $5
        (i32.load
         (get_local $0)
        )
       )
       (i32.const -2)
      )
      (i32.const -1)
     )
    )
   )
   (block $label$2
    (block $label$3
     (br_if $label$3
      (i32.and
       (get_local $5)
       (i32.const 1)
      )
     )
     (set_local $3
      (i32.shr_u
       (i32.and
        (get_local $5)
        (i32.const 254)
       )
       (i32.const 1)
      )
     )
     (br $label$2)
    )
    (set_local $3
     (i32.load offset=4
      (get_local $0)
     )
    )
   )
   (set_local $4
    (i32.const 10)
   )
   (block $label$4
    (br_if $label$4
     (i32.lt_u
      (tee_local $1
       (select
        (get_local $3)
        (get_local $1)
        (i32.gt_u
         (get_local $3)
         (get_local $1)
        )
       )
      )
      (i32.const 11)
     )
    )
    (set_local $4
     (i32.add
      (i32.and
       (i32.add
        (get_local $1)
        (i32.const 16)
       )
       (i32.const -16)
      )
      (i32.const -1)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.eq
      (get_local $4)
      (get_local $2)
     )
    )
    (block $label$6
     (block $label$7
      (br_if $label$7
       (i32.ne
        (get_local $4)
        (i32.const 10)
       )
      )
      (set_local $6
       (i32.const 1)
      )
      (set_local $1
       (i32.add
        (get_local $0)
        (i32.const 1)
       )
      )
      (set_local $2
       (i32.load offset=8
        (get_local $0)
       )
      )
      (set_local $7
       (i32.const 0)
      )
      (br $label$6)
     )
     (set_local $1
      (call $_Znwj
       (i32.add
        (get_local $4)
        (i32.const 1)
       )
      )
     )
     (block $label$8
      (br_if $label$8
       (i32.gt_u
        (get_local $4)
        (get_local $2)
       )
      )
      (br_if $label$5
       (i32.eqz
        (get_local $1)
       )
      )
     )
     (block $label$9
      (br_if $label$9
       (i32.and
        (tee_local $5
         (i32.load8_u
          (get_local $0)
         )
        )
        (i32.const 1)
       )
      )
      (set_local $7
       (i32.const 1)
      )
      (set_local $2
       (i32.add
        (get_local $0)
        (i32.const 1)
       )
      )
      (set_local $6
       (i32.const 0)
      )
      (br $label$6)
     )
     (set_local $2
      (i32.load offset=8
       (get_local $0)
      )
     )
     (set_local $6
      (i32.const 1)
     )
     (set_local $7
      (i32.const 1)
     )
    )
    (block $label$10
     (block $label$11
      (br_if $label$11
       (i32.and
        (get_local $5)
        (i32.const 1)
       )
      )
      (set_local $5
       (i32.shr_u
        (i32.and
         (get_local $5)
         (i32.const 254)
        )
        (i32.const 1)
       )
      )
      (br $label$10)
     )
     (set_local $5
      (i32.load offset=4
       (get_local $0)
      )
     )
    )
    (block $label$12
     (br_if $label$12
      (i32.eqz
       (tee_local $5
        (i32.add
         (get_local $5)
         (i32.const 1)
        )
       )
      )
     )
     (drop
      (call $memcpy
       (get_local $1)
       (get_local $2)
       (get_local $5)
      )
     )
    )
    (block $label$13
     (br_if $label$13
      (i32.eqz
       (get_local $6)
      )
     )
     (call $_ZdlPv
      (get_local $2)
     )
    )
    (block $label$14
     (br_if $label$14
      (i32.eqz
       (get_local $7)
      )
     )
     (i32.store offset=4
      (get_local $0)
      (get_local $3)
     )
     (i32.store offset=8
      (get_local $0)
      (get_local $1)
     )
     (i32.store
      (get_local $0)
      (i32.or
       (i32.add
        (get_local $4)
        (i32.const 1)
       )
       (i32.const 1)
      )
     )
     (return)
    )
    (i32.store8
     (get_local $0)
     (i32.shl
      (get_local $3)
      (i32.const 1)
     )
    )
   )
   (return)
  )
  (call $abort)
  (unreachable)
 )
 (func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (set_local $2
   (call $strlen
    (get_local $1)
   )
  )
  (set_local $5
   (i32.const 10)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (i32.and
      (tee_local $3
       (i32.load8_u
        (get_local $0)
       )
      )
      (i32.const 1)
     )
    )
   )
   (set_local $5
    (i32.add
     (i32.and
      (tee_local $3
       (i32.load
        (get_local $0)
       )
      )
      (i32.const -2)
     )
     (i32.const -1)
    )
   )
  )
  (set_local $4
   (i32.and
    (get_local $3)
    (i32.const 1)
   )
  )
  (block $label$1
   (block $label$2
    (block $label$3
     (block $label$4
      (block $label$5
       (block $label$6
        (br_if $label$6
         (i32.le_u
          (get_local $2)
          (get_local $5)
         )
        )
        (br_if $label$5
         (get_local $4)
        )
        (set_local $3
         (i32.shr_u
          (i32.and
           (get_local $3)
           (i32.const 254)
          )
          (i32.const 1)
         )
        )
        (br $label$4)
       )
       (br_if $label$3
        (get_local $4)
       )
       (set_local $5
        (i32.add
         (get_local $0)
         (i32.const 1)
        )
       )
       (br_if $label$2
        (get_local $2)
       )
       (br $label$1)
      )
      (set_local $3
       (i32.load offset=4
        (get_local $0)
       )
      )
     )
     (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc
      (get_local $0)
      (get_local $5)
      (i32.sub
       (get_local $2)
       (get_local $5)
      )
      (get_local $3)
      (i32.const 0)
      (get_local $3)
      (get_local $2)
      (get_local $1)
     )
     (return
      (get_local $0)
     )
    )
    (set_local $5
     (i32.load offset=8
      (get_local $0)
     )
    )
    (br_if $label$1
     (i32.eqz
      (get_local $2)
     )
    )
   )
   (drop
    (call $memmove
     (get_local $5)
     (get_local $1)
     (get_local $2)
    )
   )
  )
  (i32.store8
   (i32.add
    (get_local $5)
    (get_local $2)
   )
   (i32.const 0)
  )
  (block $label$7
   (br_if $label$7
    (i32.and
     (i32.load8_u
      (get_local $0)
     )
     (i32.const 1)
    )
   )
   (i32.store8
    (get_local $0)
    (i32.shl
     (get_local $2)
     (i32.const 1)
    )
   )
   (return
    (get_local $0)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (get_local $2)
  )
  (get_local $0)
 )
 (func $_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (block $label$0
   (block $label$1
    (br_if $label$1
     (tee_local $5
      (i32.and
       (tee_local $6
        (i32.load8_u
         (get_local $0)
        )
       )
       (i32.const 1)
      )
     )
    )
    (set_local $6
     (i32.shr_u
      (get_local $6)
      (i32.const 1)
     )
    )
    (br $label$0)
   )
   (set_local $6
    (i32.load offset=4
     (get_local $0)
    )
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eq
     (get_local $4)
     (i32.const -1)
    )
   )
   (br_if $label$2
    (i32.lt_u
     (get_local $6)
     (get_local $1)
    )
   )
   (set_local $6
    (select
     (tee_local $6
      (i32.sub
       (get_local $6)
       (get_local $1)
      )
     )
     (get_local $2)
     (i32.lt_u
      (get_local $6)
      (get_local $2)
     )
    )
   )
   (block $label$3
    (block $label$4
     (br_if $label$4
      (get_local $5)
     )
     (set_local $0
      (i32.add
       (get_local $0)
       (i32.const 1)
      )
     )
     (br $label$3)
    )
    (set_local $0
     (i32.load offset=8
      (get_local $0)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.eqz
      (tee_local $2
       (select
        (get_local $4)
        (get_local $6)
        (tee_local $5
         (i32.gt_u
          (get_local $6)
          (get_local $4)
         )
        )
       )
      )
     )
    )
    (br_if $label$5
     (i32.eqz
      (tee_local $1
       (call $memcmp
        (i32.add
         (get_local $0)
         (get_local $1)
        )
        (get_local $3)
        (get_local $2)
       )
      )
     )
    )
    (return
     (get_local $1)
    )
   )
   (return
    (select
     (i32.const -1)
     (get_local $5)
     (i32.lt_u
      (get_local $6)
      (get_local $4)
     )
    )
   )
  )
  (call $abort)
  (unreachable)
 )
 (func $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv (param $0 i32)
  (call $abort)
  (unreachable)
 )
 (func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_ (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (i64.store align=4
   (get_local $0)
   (i64.const 0)
  )
  (i32.store
   (tee_local $3
    (i32.add
     (get_local $0)
     (i32.const 8)
    )
   )
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.and
     (i32.load8_u
      (get_local $1)
     )
     (i32.const 1)
    )
   )
   (i64.store align=4
    (get_local $0)
    (i64.load align=4
     (get_local $1)
    )
   )
   (i32.store
    (get_local $3)
    (i32.load
     (i32.add
      (get_local $1)
      (i32.const 8)
     )
    )
   )
   (return
    (get_local $0)
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.ge_u
     (tee_local $3
      (i32.load offset=4
       (get_local $1)
      )
     )
     (i32.const -16)
    )
   )
   (set_local $2
    (i32.load offset=8
     (get_local $1)
    )
   )
   (block $label$2
    (block $label$3
     (block $label$4
      (br_if $label$4
       (i32.ge_u
        (get_local $3)
        (i32.const 11)
       )
      )
      (i32.store8
       (get_local $0)
       (i32.shl
        (get_local $3)
        (i32.const 1)
       )
      )
      (set_local $1
       (i32.add
        (get_local $0)
        (i32.const 1)
       )
      )
      (br_if $label$3
       (get_local $3)
      )
      (br $label$2)
     )
     (set_local $1
      (call $_Znwj
       (tee_local $4
        (i32.and
         (i32.add
          (get_local $3)
          (i32.const 16)
         )
         (i32.const -16)
        )
       )
      )
     )
     (i32.store
      (get_local $0)
      (i32.or
       (get_local $4)
       (i32.const 1)
      )
     )
     (i32.store offset=8
      (get_local $0)
      (get_local $1)
     )
     (i32.store offset=4
      (get_local $0)
      (get_local $3)
     )
    )
    (drop
     (call $memcpy
      (get_local $1)
      (get_local $2)
      (get_local $3)
     )
    )
   )
   (i32.store8
    (i32.add
     (get_local $1)
     (get_local $3)
    )
    (i32.const 0)
   )
   (return
    (get_local $0)
   )
  )
  (call $abort)
  (unreachable)
 )
 (func $memcmp (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (set_local $5
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (get_local $2)
    )
   )
   (block $label$1
    (loop $label$2
     (br_if $label$1
      (i32.ne
       (tee_local $3
        (i32.load8_u
         (get_local $0)
        )
       )
       (tee_local $4
        (i32.load8_u
         (get_local $1)
        )
       )
      )
     )
     (set_local $1
      (i32.add
       (get_local $1)
       (i32.const 1)
      )
     )
     (set_local $0
      (i32.add
       (get_local $0)
       (i32.const 1)
      )
     )
     (br_if $label$2
      (tee_local $2
       (i32.add
        (get_local $2)
        (i32.const -1)
       )
      )
     )
     (br $label$0)
    )
   )
   (set_local $5
    (i32.sub
     (get_local $3)
     (get_local $4)
    )
   )
  )
  (get_local $5)
 )
 (func $strlen (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (set_local $2
   (get_local $0)
  )
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (i32.and
       (get_local $0)
       (i32.const 3)
      )
     )
    )
    (set_local $2
     (get_local $0)
    )
    (loop $label$2
     (br_if $label$0
      (i32.eqz
       (i32.load8_u
        (get_local $2)
       )
      )
     )
     (br_if $label$2
      (i32.and
       (tee_local $2
        (i32.add
         (get_local $2)
         (i32.const 1)
        )
       )
       (i32.const 3)
      )
     )
    )
   )
   (set_local $2
    (i32.add
     (get_local $2)
     (i32.const -4)
    )
   )
   (loop $label$3
    (br_if $label$3
     (i32.eqz
      (i32.and
       (i32.and
        (i32.xor
         (tee_local $1
          (i32.load
           (tee_local $2
            (i32.add
             (get_local $2)
             (i32.const 4)
            )
           )
          )
         )
         (i32.const -1)
        )
        (i32.add
         (get_local $1)
         (i32.const -16843009)
        )
       )
       (i32.const -2139062144)
      )
     )
    )
   )
   (br_if $label$0
    (i32.eqz
     (i32.and
      (get_local $1)
      (i32.const 255)
     )
    )
   )
   (loop $label$4
    (br_if $label$4
     (i32.load8_u
      (tee_local $2
       (i32.add
        (get_local $2)
        (i32.const 1)
       )
      )
     )
    )
   )
  )
  (i32.sub
   (get_local $2)
   (get_local $0)
  )
 )
 (func $__wasm_nullptr (type $FUNCSIG$v)
  (unreachable)
 )
)
